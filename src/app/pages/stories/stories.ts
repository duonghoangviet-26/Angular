import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Story {
  id: number;
  title: string;
  author: string;
  views: number
}

@Component({
  selector: 'app-stories',
  imports: [CommonModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: Story[] = [];

  loading = false;
  error = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`http://localhost:3000/stories`).subscribe({
      next: (data: any) => {
        this.loading = true;
        this.stories = data
      },
      error: () => {
        this.loading = false;
        this.error = "Không thể tải dữ liệu"
      }
    })
  }

  hanhleClick(id: number) {
    const confirmDelete = confirm("Bạn có chắc muốn xóa không");
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        alert("Xóa thành công");
      },
      error: () => {
        alert("Xóa thất bại");
      }
    });
  }

}
