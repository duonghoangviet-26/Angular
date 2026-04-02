import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ["" , Validators.required],
      password: ["" , Validators.required]
    })
  }


  

    submitForm() {
     const data = this.loginForm.value;
      this.http.post(`http://localhost:3000/login`,data).subscribe({
        next:(res: any) => {
          alert("Đăng nhập thành công");
          this.loginForm.reset();
          localStorage.setItem("token", res.accessToken);
          this.router.navigateByUrl("/stories")
        },
        error: () => {
          alert("Đăng nhập thất bại")
        }
      })
    }
}
