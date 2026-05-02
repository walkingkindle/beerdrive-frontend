import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  setView(v: string) {
    const body = document.body;
    body.classList.remove('view-grid', 'view-list');
    body.classList.add('view-' + v);
    document.getElementById('btnGrid')?.classList.toggle('active', v === 'grid');
    document.getElementById('btnList')?.classList.toggle('active', v === 'list');
  }
}
