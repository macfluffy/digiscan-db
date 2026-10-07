import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { Cards } from "../../models/cards.js";
import { CardSets } from "../../models/cardSets.js";
import { CardReleases } from "../../models/cardReleases.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export default {
    async up(queryInterface, Sequelize) {
        // Define the path where the seed files are kept
        const folderPath = path.normalize(path.join(dirName, './cardReleases'));
        const files = fs.readdirSync(folderPath)
            .filter(f => path.extname(f) === ".json");

        // Create a lookup map for each category
        const cards = await Cards.findAll({
            attributes: ["id", "cardNumber"],
            raw: true,                      // Returns plain objects and not the model
        });

        const traits = await CardSets.findAll({
            attributes: ["id", "setNumber"],
            raw: true,
        });

        const cardIDsFound = new Map(cards.map(card => [card.cardNumber, card.id]));
        const setIDsFound = new Map(traits.map(set => [set.setNumber, set.id]));
        const todaysDate = new Date();
        
        // Read each file and import all the seed data
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

            // Each set has more than 1 card. This needs to be flattened to create key pairs
            const records = data.flatMap(row => {
                const setId = setIDsFound.get(row.setNumber);
                if (!setId) throw new Error(`${file}: The trait ${traitName} could not be found.`);

                return row.cardNumber.map(traitName => {
                    const cardId = cardIDsFound.get(traitName);
                    if (!cardId) throw new Error(`${file}: No card with the number ${row.cardNumber} could be found.`);

                    return {
                        cardId,
                        setId,
                        createdAt: todaysDate,
                        updatedAt: todaysDate
                    };
                });
            });

            try {
                // Ignore duplicate data
                await CardReleases.bulkCreate(records, { 
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
        await queryInterface.bulkDelete('CardReleases', null, {});
    }
};