import { Component } from '@angular/core';
import { darkTheme, lightTheme } from '../app/core/app.constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Countries';
  isDark: boolean = true;
  

constructor(){
  document.documentElement.style.setProperty('--primary-color', darkTheme["--primary-color"]);
  document.documentElement.style.setProperty('--secondary-color', darkTheme["--secondary-color"]);
}

  changeTheme() {
    this.isDark = !(this.isDark);
    if (this.isDark) {
      document.documentElement.style.setProperty('--primary-color', darkTheme["--primary-color"]);
      document.documentElement.style.setProperty('--secondary-color', darkTheme["--secondary-color"]);
    }
    else {
      document.documentElement.style.setProperty('--primary-color', lightTheme["--primary-color"]);
      document.documentElement.style.setProperty('--secondary-color', lightTheme["--secondary-color"]);
    }
  }

}
