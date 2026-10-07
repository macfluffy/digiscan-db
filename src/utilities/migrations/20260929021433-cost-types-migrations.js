import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cost_types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            cost_type: {
                type: DataTypes.ENUM,
                values: [
                    'play', 
                    'use'
                ],
                unique: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('cost_types');
    }
};