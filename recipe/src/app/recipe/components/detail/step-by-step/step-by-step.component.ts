import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from 'src/app/recipe/models/RecipeModel';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})
export class StepByStepComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
