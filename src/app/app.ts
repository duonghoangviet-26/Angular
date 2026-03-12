import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // title = 'my-app';
  // fullName = "Dương Hoàng Việt";

  // sayHello() {
  //   console.log("Hello xin chào bạn");
  //   alert("Xin chào " + this.fullName)
  // }
}
