import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from 'src/app/recipe/models/CategoryModel';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent implements OnInit {

  @Input() category: CategoryModel;

  constructor() { }

  ngOnInit(): void {
  }

}
