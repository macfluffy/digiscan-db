// Give each router the ability to search
export function owningModelFinder(primaryModel) {
    // For finding models that contain attributes from associated models
    return function findModelByAttribute(attribute) {
        if (attribute in primaryModel.rawAttributes) {
            return { 
                model: primaryModel, 
                type: 'primary' 
            };
        }

        for (const association of Object.values(primaryModel.associations)) {
            // Not all assocations will filter with the through attribute
            const throughModel = association.through?.model;    

            if (throughModel && attribute in throughModel.rawAttributes) {
                return { 
                    model: association.target, 
                    type: 'through', 
                    throughModel
                };
            }
            if (attribute in association.target.rawAttributes) {
                return { 
                    model: association.target, 
                    type: 'target'
                };
            }
        }

        return null;
    };
}