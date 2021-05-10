import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { AuthService } from './../../core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html',
})
export class SignInComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup = new FormGroup({});
  @ViewChild('userNameInput') userNameInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    /*
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    */

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (this.platformDetectorService.isPlatformBrowser()) {
      if (this.userNameInput) {
        this.userNameInput.nativeElement.focus();
      }
    }
  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.userNameInput?.nativeElement.focus();
    this.cdRef.detectChanges();
  }

  login(): void {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.authenticate(userName, password).subscribe(
      () => this.router.navigate(['user', userName]),
      (err) => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput?.nativeElement.focus();

        alert('Invalid user name or password');
      }
    );
  }
}
