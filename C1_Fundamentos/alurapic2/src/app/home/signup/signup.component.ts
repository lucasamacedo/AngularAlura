import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});
  @ViewChild('emailInput') emailInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignUpService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        this.userNotTakenValidatorService.checkUserNameTaken(),
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
  }
  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput?.nativeElement.focus();
    this.cdRef.detectChanges();
  }


  signUp(): void {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.signUpService.signUp(newUser).subscribe(
      () => this.router.navigate(['']),
      (err) => console.log(err)
    );
  }
}
