import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  title = "Đây là trang sanh sách";
  laptop = "Mac M5 pro";
  phone = "Iphone 17 promax";
  table = "Ipad M3 pro"
}
