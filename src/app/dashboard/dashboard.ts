import { Component } from '@angular/core';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';
import { Toolbar } from '../components/toolbar/toolbar';
import { QuickAccessBar } from '../components/quick-access-bar/quick-access-bar';
import { DashboardUtils } from '../../utils/dashboard-utils';
import { FileBrowser } from '../files/file-browser/file-browser';

@Component({
  selector: 'app-dashboard',
  imports: [Breadcrumb, Toolbar, QuickAccessBar, FileBrowser],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor() {}

  toggleSelect(el: any) {
    el.classList.toggle('selected');
  }

  toggleChip(el: any) {
    DashboardUtils.toggleChip(el);
  }
}
