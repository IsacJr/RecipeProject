import { CategoryModel } from '../models/CategoryModel';
import { faDrumstickBite, faIceCream, faGlassMartini, faHamburger, faCarrot } from '@fortawesome/free-solid-svg-icons';

export const MockedCategory: CategoryModel[] = [
    {
        id: 1, name: "Meat", avatar: faDrumstickBite
    },
    {
        id: 2, name: "Deserts", avatar: faIceCream
    },
    {
        id: 3, name: "Drinks", avatar: faGlassMartini
    },
    {
        id: 4, name: "Fast Food", avatar: faHamburger
    },
    {
        id: 5, name: "Salad", avatar: faCarrot
    },
];