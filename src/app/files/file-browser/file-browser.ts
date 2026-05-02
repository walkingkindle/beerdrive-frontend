import { Component } from '@angular/core';
import { FileItem } from '../../model/file-item';
import { FileGrid } from './components/file-grid/file-grid';
import { FileList } from './components/file-list/file-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-browser',
  imports: [FileList, FileGrid, CommonModule],
  templateUrl: './file-browser.html',
  styleUrl: './file-browser.css',
})
export class FileBrowser {
  viewMode: 'grid' | 'list' = 'grid';

  files: FileItem[] = [
    { name: 'Projects', type: 'folder', itemsCount: 12, shared: 3, modified: 'Yesterday' },
    { name: 'Design Assets', type: 'folder', itemsCount: 37, shared: 1, modified: 'Apr 8, 2026' },
    { name: 'Archive 2024', type: 'folder', itemsCount: 8, modified: 'Jan 12, 2025' },

    { name: 'Q2 Report.docx', type: 'word', size: '148 KB', shared: 5, modified: 'Apr 10, 2026' },
    { name: 'Budget 2025.xlsx', type: 'excel', size: '94 KB', modified: 'Mar 28, 2026' },
    { name: 'Contract.pdf', type: 'pdf', size: '2.4 MB', shared: 2, modified: 'Apr 1, 2026' },
    { name: 'Banner Final.png', type: 'image', size: '3.1 MB', modified: 'Apr 3, 2026' },
    { name: 'backup_mar.zip', type: 'zip', size: '18.7 MB', modified: 'Mar 31, 2026' },
    { name: 'Pitch Deck.pptx', type: 'ppt', size: '8.2 MB', shared: 4, modified: 'Apr 7, 2026' },
    { name: 'Intro_v3.mp4', type: 'video', size: '54 MB', modified: 'Mar 20, 2026' },
  ];

  onSelect(file: any) {
    console.log(file);
  }
}
