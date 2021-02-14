import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { unsubscribeObservables } from 'src/app/shared/utils/observable-utils';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  recipe: RecipeModel;
  id: number;
  private subRouteId: any;
  private subscriptionList: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private facade: RecipeFacade) { }

  ngOnInit(): void {
    this.subscriptionList.push(
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.getRecipeById(this.id);
      })
    );
  }

  ngOnDestroy(): void {
    unsubscribeObservables(this.subscriptionList);
  }

  private getRecipeById(id: number): void {
    this.subscriptionList.push(
      this.facade.getRecipeById(this.id)
      .pipe(take(1))
      .subscribe(
        response => this.recipe = response,
        error => console.log(error)
      )
    );
  }

}
