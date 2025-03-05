import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomSentence = faker.lorem.sentence(); 
  enteredText = '';
  right="correct";

  getInputValue(event: any) {
    const inputElement = event.target as HTMLInputElement; 
    this.enteredText = inputElement.value;
    console.log(inputElement.value); 
  }

  compare(randomLetter:string , enteredLetter: string)
  {
    if(!enteredLetter)
    {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect' ;
  }
} 
 