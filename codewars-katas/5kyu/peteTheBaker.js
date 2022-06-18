/*  *****
Challenge: 5kyu Pete, the baker

Instructions: Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
Examples

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
              

                                       MY Solution
function cakes(recipe, available) {
 if (Object.keys(recipe).length > Object.keys(available).length){
     return 0
 }else{
    const neededRecipe = [];
    Object.keys(recipe).forEach(key => neededRecipe.push(key));

    const a = ((available, neededRecipe) => {
        for(const str of neededRecipe){
        if(Object.keys(available).includes(str)){
            continue;
        }else{
            return false;
        }
        }
        return true;
    })
    if (a){
        const newArr = []
        neededRecipe.forEach(item => newArr.push(Math.floor(available[item]/recipe[item])))
        var smallest = newArr.sort((a, b) => a - b);

        return smallest[0]
    }
    if(!a){
        return false
    }
 }
    
}
                                       CodeWars Solution(s)

                    const cakes = (needs, has) => Math.min(
                ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
                )

                
*/

/**Alternative Solution
 * 
 * A function to determine how many cakes can Pete do, following a recipe with n ingredients available.
 * 
 * @param {Object} recipe an object with the recipe description
 * @param {Object} ingredients an object that tells the function which ingredients does Pete have available.
 * 
 * @returns {Number} the amount of cakes that Pete can do with the given ingredients.
 */
 function cakes(recipe, ingredients) {
    const recipeKeys = Object.keys(recipe);
    let cakes = null;

    // Uses a little hacky way to set the cakes variable back to 0 if there is an ingredient lacking.
    // I use a OR operator, then, if the property doesn't exists inside the ingredients object, it will
    // try to evaluate the right side of the OR operator. The right side uses a AND operator to break the loop.
    // At the left side of the AND operator, we have the attribution of cakes to 0 (this is evaluated as truthy)
    // At the right side of the AND operator, we have a forced false. Then, this condition will never be true,
    // only executing the left side of the AND, and then, breaking the for loop.
    for (let i = 0; i < recipeKeys.length && (ingredients[recipeKeys[i]] || (cakes = 0 && false)); i++) {
        const amount = Math.floor(ingredients[recipeKeys[i]] / recipe[recipeKeys[i]]);
        
        if (cakes === null || amount < cakes)
            cakes = amount;
    }

    return cakes || 0;
}




