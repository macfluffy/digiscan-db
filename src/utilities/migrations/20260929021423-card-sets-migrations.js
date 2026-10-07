import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_sets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            set_number: {
                type: DataTypes.STRING,
            },
            set_name: {
                type: DataTypes.STRING,
            },
            block_number: {
                type: DataTypes.INTEGER,
            },
            print_date: {
                // Only need the year, month, and day
                type: DataTypes.DATEONLY,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_sets');
    }
};