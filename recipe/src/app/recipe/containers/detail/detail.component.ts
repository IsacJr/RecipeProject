import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  recipe:RecipeModel;
  
  id: number;
  private subRouteId: any;

  constructor(
    private route: ActivatedRoute,
    private facade: RecipeFacade) { }

  ngOnInit(): void {
    this.subRouteId = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getRecipeById(this.id);
    })
  }

  ngOnDestroy() {
    this.subRouteId.unsubscribe();
  }

  private getRecipeById(id: number){
    this.facade.getRecipeById(this.id).subscribe(
      response => this.recipe = response,
      error => console.log(error)
    );
  }

}
