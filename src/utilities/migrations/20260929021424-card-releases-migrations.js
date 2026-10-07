import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_releases', {
            // Both card and set need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or CardSets 
            // import in a migration file.
            card_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            set_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'card_sets',
                    key: 'id',
                },
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_releases');
    }
};