import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }


  get name() {
    return this.addForm.get('name');
  }
  get price() {
    return this.addForm.get('price');
  }
  get category() {
    return this.addForm.get('category');
  }



  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }




  submitForm() {
    console.log(this.addForm.value);

  }

  submitRegister() {
    console.log(this.registerForm.value);
  }
}
