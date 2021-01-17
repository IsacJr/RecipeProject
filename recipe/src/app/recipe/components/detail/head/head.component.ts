import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
