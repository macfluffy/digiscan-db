export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_typings', {
            // Both card and type need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or CardTypes 
            // import in a migration file.
            card_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            type_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'card_types',
                    key: 'id',
                },
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_typings');
    }
};