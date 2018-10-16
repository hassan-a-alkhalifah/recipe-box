import { Component } from '@angular/core';
import { RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Recipe Box';
  recipes = RECIPES;
}
