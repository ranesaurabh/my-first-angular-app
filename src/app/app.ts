import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-first-angular-app');


  name="Saurabh Rane"

  Age=25




  updateName(){

    this.name="Snehal"
  }


  buttonClick(){
    alert("Hello AJ")
  }
}
