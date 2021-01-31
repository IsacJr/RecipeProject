import { CategoryModel } from '../models/CategoryModel';
import { faUtensils, faIceCream, faGlassMartini, faPizzaSlice, faCarrot } from '@fortawesome/free-solid-svg-icons';

export const MockedCategory: CategoryModel[] = [
    {
        id: 1, name: "Meat", avatar: faUtensils
    },
    {
        id: 2, name: "Deserts", avatar: faIceCream
    },
    {
        id: 3, name: "Drinks", avatar: faGlassMartini
    },
    {
        id: 4, name: "Pasta", avatar: faPizzaSlice
    },
    {
        id: 5, name: "Salad", avatar: faCarrot
    },
];