import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { Cards } from "../../models/cards.js";
import { CostTypes } from "../../models/costTypes.js";
import { CardCostings } from "../../models/cardCostings.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export default {
    async up(queryInterface, Sequelize) {
        // Define the path where the seed files are kept
        const folderPath = path.normalize(path.join(dirName, './cardCostings'));
        const files = fs.readdirSync(folderPath)
            .filter(f => path.extname(f) === ".json");

        // Create a lookup map for each category
        const cards = await Cards.findAll({
            attributes: ["id", "cardNumber"],
            raw: true,                      // Returns plain objects and not the model
        });

        const costTypes = await CostTypes.findAll({
            attributes: ["id", "costType"],
            raw: true,
        });

        const cardIDsFound = new Map(cards.map(card => [card.cardNumber, card.id]));
        const costIDsFound = new Map(costTypes.map(cost => [cost.costType, cost.id]));
        
        // Read each file and import all the seed data
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

            // Each card can have more than 1 cost type thanks to dual cards. 
            // This needs to be flattened to create key pairs
            const records = data.flatMap(row => {
                const cardId = cardIDsFound.get(row.cardNumber);
                if (!cardId) throw new Error(`${file}: No card with the number ${row.cardNumber} could be found.`);

                return row.costType.map(cost => {
                    const costId = costIDsFound.get(cost.type);
                    if (!costId) throw new Error(`${file}: The card costing type ${cost.type} could not be found.`);

                    const cardCost = cost.cardCost;

                    return {
                        cardId,
                        costId,
                        cardCost
                    };
                });
            });

            try {
                // Ignore duplicate data
                await CardCostings.bulkCreate(records, { 
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
        await queryInterface.bulkDelete('card_costings', null, {});
    }
};