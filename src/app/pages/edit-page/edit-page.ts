import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-edit-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css',
})
export class EditPage {
  editForm: FormGroup;
  error = "";
  id: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', [Validators.required]],
      views: ['', [Validators.required]],
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id) {
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          this.editForm.patchValue(data);
        },
        error: () => {
          this.error = "Lỗi k lấy được dữ liệu "
        }
      })
    }
  }

  submitForm() {
    if (!this.id) return;

    const data = this.editForm.value;

    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        alert("Cập nhật thành công");
        this.router.navigateByUrl("/list-page");
      },
      error: () => {
        this.error = "Lỗi k update đc sản phẩm"
      }
    })
  }




}
