import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root', // to describe how Angular refers to the component in templates.
  standalone: true, //to describe whether the component requires a NgModule
  imports: [CommonModule, RouterOutlet, HomeComponent], //to describe the component's dependencies
  templateUrl: './app.component.html', //to describe the component's HTML markup and layout
  styleUrl: './app.component.css' //to list the URLs of the CSS files that the component uses in an array.
})
export class AppComponent {
  
}
