import { Component } from '@angular/core';
import { DashboardUtils } from '../../../utils/dashboard-utils';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  toggleChip(ev: any) {
    DashboardUtils.toggleChip(ev);
  }

  setSortActive(el: any) {
    document.querySelectorAll('.sort-option').forEach((e) => e.classList.remove('active'));
    el.classList.add('active');
  }
}
