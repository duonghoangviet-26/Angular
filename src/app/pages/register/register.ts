import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
    registerForm: FormGroup;

    constructor (
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router 
    ) {
      this.registerForm = this. fb.group({
          name: ["", Validators.required],
          email: ["" , Validators.required],
          password: ["" , Validators.required],
          repassword: ["", Validators.required]
      })
    }

    submitForm() {
    const { name, email, password, repassword } = this.registerForm.value;

      const data = {name , email , password};

      if(password !== repassword) {
          alert("Mật khẩu không khớp");
    return;
      }

      this.http.post(`http://localhost:3000/register`,data).subscribe({
        next: () => {
          alert("Đăng kí thành công");
          this.registerForm.reset();
          this.router.navigateByUrl("/login")
        },
        error: () => {
          alert("Đăng kí thất bại")
        }
      })
    }
}
