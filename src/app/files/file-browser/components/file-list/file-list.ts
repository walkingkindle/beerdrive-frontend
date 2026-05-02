import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileItem } from '../../../../model/file-item';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-file-list',
  imports: [NgClass,CommonModule],
  templateUrl: './file-list.html',
  styleUrl: './file-list.css',
})
export class FileList {
  @Input() files: FileItem[] = [];
  @Output() select = new EventEmitter<FileItem>();

  getIcon(type: string) {
    return {
      'bi-folder-fill': type === 'folder',
      'bi-file-earmark-word-fill': type === 'word',
      'bi-file-earmark-excel-fill': type === 'excel',
      'bi-file-earmark-pdf-fill': type === 'pdf',
      'bi-file-earmark-image-fill': type === 'image',
      'bi-file-zip-fill': type === 'zip',
      'bi-file-earmark-play-fill': type === 'video',
      'bi-file-earmark-ppt-fill': type === 'ppt',
    };
  }

  getLabel(type: string) {
    const labels: any = {
      word: 'Word Document',
      excel: 'Excel Spreadsheet',
      pdf: 'PDF Document',
      image: 'PNG Image',
      zip: 'ZIP Archive',
      video: 'Video File',
      ppt: 'PowerPoint Presentation',
    };
    return labels[type] || '';
  }
}
