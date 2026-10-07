import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('colours', {
            // Model attributes:
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            colour_name: {
                type: DataTypes.ENUM,
                values: [
                    'red', 
                    'blue', 
                    'yellow', 
                    'green', 
                    'black', 
                    'purple', 
                    'white'
                ],
                unique: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('colours');
    }
};