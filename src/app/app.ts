import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import {Navigation} from './components/navigation/navigation'
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[CommonModule,Dashboard, Navigation, Sidebar],
})
export class App {

}