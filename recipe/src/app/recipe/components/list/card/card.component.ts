import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RecipeModel } from '../../../models/RecipeModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() recipe:RecipeModel;
  @Output() cardClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.cardClicked.emit(this.recipe.id);
  }


}
