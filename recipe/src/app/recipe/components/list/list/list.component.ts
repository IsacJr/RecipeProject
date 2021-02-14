import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  recipeList: RecipeModel[];
  @Output()
  routerDetailEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleCardClicked(event:any): void {
    this.routerDetailEvent.emit(event);
  }

}
