import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  @Input() recipeSpotlightList: RecipeModel[];
  @Output() routerDetailEvent = new EventEmitter<number>();

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

  handleCardClicked(event:any): void {
    this.routerDetailEvent.emit(event);
  }

}
