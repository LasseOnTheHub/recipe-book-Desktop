import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[]= [
  new Recipe('Schnitzel','very tasty', 'http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/matcha-mousse-cake.jpg',[
    new Ingredient('French Fries',2),
    new Ingredient('Pork',1)
  ]),
  new Recipe('Super Schnitzel','very mega tasty', 'http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/rosewater-raspberry-sponge-cake.jpg',[])
];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
