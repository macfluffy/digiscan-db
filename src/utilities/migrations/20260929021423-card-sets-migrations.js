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
                type: Sequelize.STRING,
            },
            set_name: {
                type: Sequelize.STRING,
            },
            block_number: {
                type: Sequelize.INTEGER,
            },
            print_date: {
                // Only need the year, month, and day
                type: Sequelize.DATEONLY,
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
        await queryInterface.dropTable('card_sets');
    }
};