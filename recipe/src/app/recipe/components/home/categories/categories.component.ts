import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryModel } from 'src/app/recipe/models/CategoryModel';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categoryList: CategoryModel[];
  @Output() categoryCardClicked = new EventEmitter<number>();

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

  handleCardClicked(event):void {
    this.categoryCardClicked.emit(event);
  }

}
