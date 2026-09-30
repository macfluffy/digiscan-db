import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { Cards } from "../../models/cards.js";
import { CardTraits } from "../../models/cardTraits.js";
import { CardTraitings } from "../../models/cardTraitings.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export default {
    async up(queryInterface, Sequelize) {
        // Define the path where the seed files are kept
        const folderPath = path.normalize(path.join(dirName, './cardTraitings'));
        const files = fs.readdirSync(folderPath)
            .filter(f => path.extname(f) === ".json");

        // Create a lookup map for each category
        const cards = await Cards.findAll({
            attributes: ["id", "cardNumber"],
            raw: true,                      // Returns plain objects and not the model
        });

        const traits = await CardTraits.findAll({
            attributes: ["id", "cardTrait"],
            raw: true,
        });

        const cardIDsFound = new Map(cards.map(card => [card.cardNumber, card.id]));
        const traitIDsFound = new Map(traits.map(trait => [trait.cardTrait, trait.id]));
        const todaysDate = new Date();
        
        // Read each file and import all the seed data
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

            // Each card has more than 1 trait. This needs to be flattened to create key pairs
            const records = data.flatMap(row => {
                const cardId = cardIDsFound.get(row.cardNumber);
                if (!cardId) throw new Error(`${file}: No card with the number ${row.cardNumber} could be found.`);

                return row.cardTrait.map(traitName => {
                    const traitId = traitIDsFound.get(traitName);
                    if (!traitId) throw new Error(`${file}: The trait ${traitName} could not be found.`);

                    return {
                        cardId,
                        traitId,
                        createdAt: todaysDate,
                        updatedAt: todaysDate
                    };
                });
            });

            try {
                // Ignore duplicate data
                await CardTraitings.bulkCreate(records, { 
                    ignoreDuplicates: true,
                });

                console.log(`${file} imported succesful!`);
            } 
            catch (errorMessage) {
                console.error(`Error: Could not import ${file}`, errorMessage);
                throw errorMessage;
            }
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('CardTraitings', null, {});
    }
};