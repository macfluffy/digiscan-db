export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_traitings', {
            // Both card and trait need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or CardTraits 
            // import in a migration file.
            card_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            trait_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'card_traits',
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
        await queryInterface.dropTable('card_traitings');
    }
};