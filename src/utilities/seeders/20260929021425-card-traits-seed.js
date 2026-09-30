import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { CardTraits } from "../../models/cardTraits.js";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export default {
    async up(queryInterface, Sequelize) {
        // Define the path where the seed files are kept
        const folderPath = path.normalize(path.join(dirName, './cardTraits'));
        const files = fs.readdirSync(folderPath)
            .filter(f => path.extname(f) === ".json");
        
        // Read each file and import all the seed data
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

            try {
                // Update the fields instead of duplicating data
                await CardTraits.bulkCreate(data, { 
                    updateOnDuplicate: [
                        'cardTrait',  
                        'updatedAt' // timestamps are set off
                    ]
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
        await queryInterface.bulkDelete('CardTraits', null, {});
    }
};