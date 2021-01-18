import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
