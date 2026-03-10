import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = "Dương Hoàng Việt";

  sayHello() {
    console.log("Hello xin chào bạn");
    alert("Xin chào " + this.fullName)
  }
}
