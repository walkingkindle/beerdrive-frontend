import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem } from '../../../../model/file-item';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-file-grid',
  imports: [NgClass,CommonModule],
  templateUrl: './file-grid.html',
  styleUrl: './file-grid.css',
})
export class FileGrid {
  @Input() files: FileItem[] = [];
  @Output() select = new EventEmitter<FileItem>();

  getThumbClass(type: string) {
    return {
      'folder-thumb': type === 'folder',
      'doc-thumb': type === 'word',
      'xls-thumb': type === 'excel',
      'pdf-thumb': type === 'pdf',
      'img-thumb': type === 'image',
      'zip-thumb': type === 'zip',
      'video-thumb': type === 'video',
    };
  }

  getIcon(type: string) {
    return {
      'bi-folder-fill': type === 'folder',
      'bi-file-earmark-word-fill': type === 'word',
      'bi-file-earmark-excel-fill': type === 'excel',
      'bi-file-earmark-pdf-fill': type === 'pdf',
      'bi-file-earmark-image-fill': type === 'image',
      'bi-file-zip-fill': type === 'zip',
      'bi-file-earmark-play-fill': type === 'video',
    };
  }

  getColor(type: string) {
    const colors: any = {
      folder: '#f0a500',
      word: '#2b6fd9',
      excel: '#1a9e6d',
      pdf: '#d93025',
      image: '#2b8fcc',
      zip: '#7c4dff',
      video: '#e91e63',
    };
    return colors[type];
  }
}
