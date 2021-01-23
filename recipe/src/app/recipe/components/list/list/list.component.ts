import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  recipeList: RecipeModel[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
