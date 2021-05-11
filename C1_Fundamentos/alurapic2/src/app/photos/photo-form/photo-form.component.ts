import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PhotoService } from './../photo/photo.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup = new FormGroup({});
  file?: File;
  //preview: string | null | undefined | ArrayBuffer = '';
  preview = '';

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  handleFile(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files){
      console.log('entrou');
      this.file = target.files[0] as File;
      const reader = new FileReader();
      reader.onload = (eventt: any) => this.preview = eventt.target?.result;
      reader.readAsDataURL(this.file);
      console.log(this.preview);
    }
  }

  upload(event: Event): void{
    let desc = '';
    let allowComments = true;
    desc = this.photoForm.get('description')?.value;
    allowComments = this.photoForm.get('allowComments')?.value;
    console.log(this.file);

    if (this.file){
      this.photoService.upload(desc, allowComments, this.file)
      .subscribe(() => {
        this.alertService.success('Upload complete', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      });
    }
  }
}
