import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { Cards } from "../../models/cards.js";
import { CardTypes } from "../../models/cardTypes.js";
import { CardTyping } from "../../models/cardTyping.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export default {
    async up(queryInterface, Sequelize) {
        // Define the path where the seed files are kept
        const folderPath = path.normalize(path.join(dirName, './cardTyping'));
        const files = fs.readdirSync(folderPath)
            .filter(f => path.extname(f) === ".json");

        // Create a lookup map for each category
        const cards = await Cards.findAll({
            attributes: ["id", "cardNumber"],
            raw: true,                      // Returns plain objects and not the model
        });

        const types = await CardTypes.findAll({
            attributes: ["id", "cardType"],
            raw: true,
        });

        const cardIDsFound = new Map(cards.map(card => [card.cardNumber, card.id]));
        const traitIDsFound = new Map(types.map(type => [type.cardType, type.id]));
        const todaysDate = new Date();
        
        // Read each file and import all the seed data
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

            // Each card has more than 1 trait. This needs to be flattened to create key pairs
            const records = data.flatMap(row => {
                const cardId = cardIDsFound.get(row.cardNumber);
                if (!cardId) throw new Error(`${file}: No card with the number ${row.cardNumber} could be found.`);

                return row.cardType.map(typeName => {
                    const typeId = traitIDsFound.get(typeName);
                    if (!typeId) throw new Error(`${file}: The card type ${typeName} could not be found.`);

                    return {
                        cardId,
                        typeId,
                        createdAt: todaysDate,
                        updatedAt: todaysDate
                    };
                });
            });

            try {
                // Ignore duplicate data
                await CardTyping.bulkCreate(records, { 
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
        await queryInterface.bulkDelete('CardTyping', null, {});
    }
};