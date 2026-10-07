import { DataTypes, Sequelize } from "sequelize";

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
                type: DataTypes.ENUM,
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
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('evolution_types');
    }
};