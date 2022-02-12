import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-file-test',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

  constructor() { }

  @Input() label = 'Choose a file';
  label2 = 'Click to select a file';
  @Input() required;
  @Input() fileUploadProgress = 0;
  @Input() sltFileList: FileList;

  @Output() fileUploadProgressChange = new EventEmitter();
  @Output() sltFileListChange = new EventEmitter();

  ngOnInit(): void {}

  onSelectFile(event) {
    this.sltFileList = event.target.files;
    this.sltFileListChange.emit(this.sltFileList);
    this.label2 = 'A file is selected';
  }

}
