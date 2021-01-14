import { Component, OnInit, Input } from '@angular/core';

import { RecipeModel } from '../../../models/RecipeModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() recipe:RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
