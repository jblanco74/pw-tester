import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pwLength = 0;
  
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';

  onChangeLength(value: string) {
    console.log(value);

    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.pwLength = parsedValue;
    }
    
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(
      `About to generate a password:
      Includes Letters: ${this.includeLetters},
      Includes Numbers: ${this.includeNumbers},
      Includes Symbols: ${this.includeSymbols}`
      );
    
    this.password = 'My password';
  }
}
