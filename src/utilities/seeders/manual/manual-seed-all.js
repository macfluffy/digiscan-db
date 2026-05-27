import { sequelize } from '../../../config/database.js';
import { seedCardSetData } from './manual-card-set-seed.js';

const seedAllData = () => {
    seedCardSetData();
    console.log("Card Set Data Seeded.");
}

seedAllData();