import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  recipe: RecipeModel = {
    id: 1, name: "Donuts", category: 1, categoryLabel: "Deserts", numberOfPeopleServes: 4, difficulty: 2, difficultyLabel: "1",
    ingredients: ["ingredient 1", "ingredient 2", "ingredient 3"], steps: ["step 1", "step 2", "step 3"]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
