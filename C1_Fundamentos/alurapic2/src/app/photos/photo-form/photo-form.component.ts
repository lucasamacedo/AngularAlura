import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup = new FormGroup({});
  file?: File;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload(event: Event): void{
    const target = event.target as HTMLInputElement;
    let desc = '';
    let allowComments = true;
    if (target.files){
      this.file = target.files[0] as File;
    }
    desc = this.photoForm.get('description')?.value;
    allowComments = this.photoForm.get('allowComments')?.value;

    console.log(desc);
    console.log(allowComments);
    console.log(this.file);
  }
}
