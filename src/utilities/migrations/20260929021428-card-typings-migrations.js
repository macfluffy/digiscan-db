import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_typing', {
            // Both card and type need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or CardTypes 
            // import in a migration file.
            card_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            type_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'card_types',
                    key: 'id',
                },
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_typing');
    }
};