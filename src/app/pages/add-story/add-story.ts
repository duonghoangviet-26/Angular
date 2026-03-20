import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;
  registerForm: FormGroup;
  loading = false;
  error: string = '';
  success: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', [Validators.required]],
      views: ['', [Validators.required]],
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
  get author() {
    return this.addForm.get('author');
  }

  get views() {
    return this.addForm.get('views');
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
    this.loading = false;
    this.error = '';
    this.success = '';
    const data = this.addForm.value
    this.http.post(`http://localhost:3000/stories`, data).subscribe({
      next: () => {
        this.loading = true;
        this.success = "Thêm thành công";
        this.addForm.reset()
      },
      error: () => {
        this.loading = false;
        this.error = 'thêm thất bại'
      },
    })

  }

  submitRegister() {
    console.log(this.registerForm.value);
  }
}


