import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoryModel } from 'src/app/recipe/models/CategoryModel';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent implements OnInit {

  @Input() category: CategoryModel;
  @Output() cardClicked = new EventEmitter<number>();

  faIceCream = faIceCream;

  constructor() { }

  ngOnInit(): void {
  }

  handleClickCard() {
    this.cardClicked.emit(this.category.id);
  }

}
