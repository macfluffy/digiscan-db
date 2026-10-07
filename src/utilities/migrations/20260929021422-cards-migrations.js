import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('cards', {
            // STRING has 255 character limit, TEXT has unlimited length
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            card_number: {
                type: DataTypes.STRING,
                unique: true,
            },
            card_name: {
                type: DataTypes.STRING,
            },
            level: {
                type: DataTypes.INTEGER,
            },
            power: {
                type: DataTypes.INTEGER,
            },
            card_text: {
                type: DataTypes.TEXT,
            },
            inheritable: {
                type: DataTypes.TEXT,
            },
            rarity: {
                type: DataTypes.ENUM,
                values: [
                    'common',
                    'uncommon',
                    'rare',
                    'superRare',
                    'ultraRare',
                    'secretRare'
                ],
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('cards');
    }
};