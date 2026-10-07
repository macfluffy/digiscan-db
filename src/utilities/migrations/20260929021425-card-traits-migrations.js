import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_traits', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            card_trait: {
                type: DataTypes.STRING,
                unique: true,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_traits');
    }
};