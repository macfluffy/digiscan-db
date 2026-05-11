import { Router } from express;
import { CardSets } from "../../models/cardSets";

export const cardSetsRouter = Router();

// CREATE: A new card set
cardSetsRouter.post("/", async (request, response) => {
    try {
        const { setNumber, setName, blockNumber, printDate } = request.body;
        const newCardSet = await CardSets.create({
            setNumber,
            setName,
            blockNumber,
            printDate,
        });

        response.status(200).json(newCardSet);
    } 
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// READ: All card sets
cardSetsRouter.get("/", async (request, response) => {
    try {
        const cardSets = await CardSets.findAll({});
        response.status(200).json(cardSets);
    } 
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// READ: One card set
cardSetsRouter.get("/:setID", async (request, response) => {
    try {
        const cardSet = await CardSets.findByPk(request.params.setID);
        
        if (!cardSet) {
            response.status(404).end();
        } 
        else {
            response.status(200).json(cardSet);
        }
    } 
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// UPDATE: One card set
cardSetsRouter.put("/:setID", async (request, response) => {
    try {
        const cardSet = await CardSets.findByPk(request.params.setID);

        if (!cardSet) {
            response.status(404).end();
        } 
        else {
            const { setNumber, setName, blockNumber, printDate } = request.body;
            await cardSet.update({ 
                setNumber, 
                setName, 
                blockNumber, 
                printDate
            });

            response.status(200).json(cardSet);
        }
    } 
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// DELETE: One card set
cardSetsRouter.delete("/:setID", async (request, response) => {
    try {
        const cardSet = await CardSets.findByPk(request.params.setID);

        if (!cardSet) {
            response.status(404).end();
        } 
        else {
            await cardSet.destroy();
            response.status(200).json(cardSet);
        }
    } 
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});