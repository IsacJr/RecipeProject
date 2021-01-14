import { Component, OnInit, Input } from '@angular/core';

import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() recipeList:RecipeModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
