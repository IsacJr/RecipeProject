import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from 'src/app/recipe/models/CategoryModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categoryList: CategoryModel[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
