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
                type: Sequelize.STRING,
                unique: true,
            },
            card_name: {
                type: Sequelize.STRING,
            },
            level: {
                type: Sequelize.INTEGER,
            },
            power: {
                type: Sequelize.INTEGER,
            },
            card_text: {
                type: Sequelize.TEXT,
            },
            inheritable: {
                type: Sequelize.TEXT,
            },
            rarity: {
                type: Sequelize.ENUM,
                values: [
                    'common',
                    'uncommon',
                    'rare',
                    'superRare',
                    'ultraRare',
                    'secretRare'
                ],
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
        await queryInterface.dropTable('cards');
    }
};