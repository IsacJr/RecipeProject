import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  @Input() recipe: RecipeModel;

  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
