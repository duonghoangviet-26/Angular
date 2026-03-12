import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name = "Hoàng Việt Dương";
  age = 20;

  handleClick() {
    alert("Bạn đã Click button")
  }
}
