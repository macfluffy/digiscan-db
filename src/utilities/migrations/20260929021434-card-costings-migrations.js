import { DataTypes, Sequelize } from "sequelize";

export default {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('card_costings', {
            // Both card and evolution need to have PK to form the composite key
            // Ensure models are Strings and not the Cards or CostTypes 
            // import in a migration file.
            card_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            cost_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                references: {
                    model: 'cost_types',
                    key: 'id',
                },
            },
            card_cost: {
                type: DataTypes.INTEGER,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('card_costings');
    }
};