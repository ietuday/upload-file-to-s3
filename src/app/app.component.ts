import { Component } from '@angular/core';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private uploadFileService: UploadService){

  }

  files: any = [];

  uploadFile(file) {
    console.log("event",file[0]);
    this.uploadFileService.uploadFile(file[0])

  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
