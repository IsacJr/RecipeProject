export class RecipeModel {
    id: number;
    name: string;
    category: number;
    categoryLabel: string;
    numberOfPeopleServes: number;
    difficulty: number;
    difficultyLabel: string;
    ingredients: string[];
    steps: string[];
    image: string;
}