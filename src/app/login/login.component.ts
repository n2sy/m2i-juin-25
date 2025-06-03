import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defaultLanguage = 'php';
  monCommentiare = 'Rien à signaler...';
  submitHandler(f: NgForm) {
    console.log(f);
  }

  resetHandler(f: NgForm) {
    f.reset();
  }

  genererInfos(f: NgForm) {
    // f.form.patchValue({ email: 'nidhal@gmail.com', password: '123456' });
    f.form.patchValue({ email: '', password: '' });
  }
}
