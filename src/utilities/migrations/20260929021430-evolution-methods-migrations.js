import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('evolution_methods', {
            // Both card and evolution need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or EvolutionTypes 
            // import in a migration file.
            card_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            evolution_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'evolution_types',
                    key: 'id',
                },
            },
            evolution_requirement: {
                type: DataTypes.STRING,
            },
            evolution_cost: {
                type: DataTypes.INTEGER,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('evolution_methods');
    }
};