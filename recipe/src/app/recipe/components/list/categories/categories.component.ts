import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from 'src/app/recipe/models/CategoryModel';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categoryList: CategoryModel[];

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  
  constructor() { }

  ngOnInit(): void {
  }

}
