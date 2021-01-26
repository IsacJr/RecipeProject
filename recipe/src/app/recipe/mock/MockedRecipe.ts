import { RecipeModel } from '../models/RecipeModel';

export const MockedRecipe: RecipeModel[] = [
    {
        id: 1, name: "Donuts", category: 2, categoryLabel: "Deserts", numberOfPeopleServes: 3, difficulty: 4, difficultyLabel: "4",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://www.sprinklesomesugar.com/wp-content/uploads/2017/11/IMG_4730-2.jpg"
    },
    {
        id: 2, name: "Naked Cake", category: 2, categoryLabel: "Deserts", numberOfPeopleServes: 5, difficulty: 3, difficultyLabel: "3",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://img.elo7.com.br/product/original/273A6FA/bolo-naked-cake-com-morangos-bolo-naked-cake.jpg"
    },
    {
        id: 3, name: "Strogonoff", category: 4, categoryLabel: "Pasta", numberOfPeopleServes: 3, difficulty: 2, difficultyLabel: "2",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://www.irismassas.com.br/wp-content/uploads/2015/06/Carnes-Estrogonoff-de-Carne.jpg"
    },
    {
        id: 4, name: "Caesar Salad", category: 5, categoryLabel: "Salad", numberOfPeopleServes: 3, difficulty: 1, difficultyLabel: "1",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/b89f8de9-0f93-4976-b318-9ab04db353bc/Derivates/d3a08a3c-abb2-452e-9121-168f67c992c8.jpg"
    },
    {
        id: 5, name: "Spaghetti and Meatballs", category: 4, categoryLabel: "Pasta", numberOfPeopleServes: 5, difficulty: 3, difficultyLabel: "3",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://images-gmi-pmc.edge-generalmills.com/6d74668c-7d48-472b-8a65-8aad349e7989.jpg"
    },
    {
        id: 6, name: "Orange Juice", category: 3, categoryLabel: "Drinks", numberOfPeopleServes: 2, difficulty: 1, difficultyLabel: "1",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://static.toiimg.com/thumb/msid-68562297,width-800,height-600,resizemode-75,imgsize-950123,pt-32,y_pad-40/68562297.jpg"
    },
    {
        id: 7, name: "Ice Cream Sandwich", category: 2, categoryLabel: "Deserts", numberOfPeopleServes: 3, difficulty: 4, difficultyLabel: "4",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://media4.s-nbcnews.com/i/newscms/2019_25/1450151/elizabeth-heiskell-today-brownie-ice-cream-sandwiches-today-main-190618_6718a00cba0e9e7c853fc2c9900707e8.jpg"
    },
    {
        id: 8, name: "Grilled Steak", category: 1, categoryLabel: "Meat", numberOfPeopleServes: 4, difficulty: 3, difficultyLabel: "3",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://www.thedailymeal.com/sites/default/files/2015/09/08/mainshutterstock_grilledste.jpg"
    },
    {
        id: 9, name: "Lasagna Bolognese", category: 4, categoryLabel: "Deserts", numberOfPeopleServes: 5, difficulty: 2, difficultyLabel: "2",
        ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"],
        image:"https://www.365daysofbakingandmore.com/wp-content/uploads/2011/02/Lasagna-FEATURE.jpg"
    }
];