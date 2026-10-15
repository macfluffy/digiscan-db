export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            card_type: {
                type: Sequelize.ENUM,
                values: [
                    'digiegg', 
                    'digimon', 
                    'tamer', 
                    'option'
                ],
                unique: true,
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
        await queryInterface.dropTable('card_types');
    }
};