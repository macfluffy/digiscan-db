import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_colour_identity', {
            // Both card and colour need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or Colours 
            // import in a migration file.
            card_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            colour_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'colours',
                    key: 'id',
                },
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_colour_identity');
    }
};