export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('colours', {
            // Model attributes:
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            colour_name: {
                type: Sequelize.ENUM,
                values: [
                    'red', 
                    'blue', 
                    'yellow', 
                    'green', 
                    'black', 
                    'purple', 
                    'white'
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
        await queryInterface.dropTable('colours');
    }
};