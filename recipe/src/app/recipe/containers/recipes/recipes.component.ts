import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeModel } from '../../models/RecipeModel';
import { RecipeFacade } from '../../recipe.facade';
import { Router } from '@angular/router';
import { CategoryModel } from '../../models/CategoryModel';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  
  recipeList: RecipeModel[];
  categoryList: CategoryModel[];
  selectedCategoryId?: number;
  myForm: FormGroup;

  constructor(
    private recipeFacade: RecipeFacade,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.myForm = this.formBuilder.group({
        categoryForm: [null, [Validators.required]]
      });
      this.getAllCategories();
      this.setSelectedCategory();      
  }

  ngOnInit(): void {

  }

  getAllRecipes(){
    this.recipeFacade.getAllRecipe().subscribe(
      response => this.recipeList = response,
      error => console.log(error)
    )
  }

  getAllCategories(){
    this.recipeFacade.getAllCategory().subscribe(
      response => this.categoryList = response,
      error => console.log(error)
    )
  }

  setSelectedCategory(){
    if(history.state.data){
      const categorySelected = this.categoryList.find(c => c.id === history.state.data);
      this.myForm.controls['categoryForm'].setValue(categorySelected, { onlySelf: true });
      this.getRecipesByCategory(history.state.data);
    }else{
      this.getAllRecipes();
    }
  }

  handleClickSpotlight(event:any){
    this.router.navigate(['/recipes/detail', event])
  }

  get categoryForm(){
    return this.myForm.get('categoryForm');
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.myForm.value.categoryForm);
    if(this.myForm.value.categoryForm)
      this.getRecipesByCategory(this.myForm.value.categoryForm.id);
    else
      this.getAllRecipes();
  }

  handleClean(){
    this.myForm.controls['categoryForm'].setValue(null, { onlySelf: true });
    this.getAllRecipes();
  }

  getRecipesByCategory(categoryId: number){
    let list: RecipeModel[];
    this.recipeFacade.getAllRecipe().subscribe(
      response => list = response,
      error => console.log(error)
    )
    this.recipeList = list.filter(r => r.category === categoryId);
  }

  handleSelectChange(e){
    console.log(e.target.value);
    // this.myForm.controls['categoryForm'].setValue(e.target.value), { onlySelf: true });
    // this.getRecipesByCategory(this.myForm.value.categoryForm);
  }

}
