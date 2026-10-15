export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('evolution_types', {
            // Model attributes:
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            evolution_type: {
                type: Sequelize.ENUM,
                values: [
                    'normal',
                    'name',
                    'trait',
                    'warp',
                    'tamer',
                    'DNA',
                    'appFusion',
                    'arts'
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
        await queryInterface.dropTable('evolution_types');
    }
};