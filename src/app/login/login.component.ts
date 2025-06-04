import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  loginShow: boolean = true;
  showError: boolean = false;

  private authSer = inject(AuthService);
  private router = inject(Router);

  submitHandler(f: NgForm) {
    if (this.loginShow) {
      this.authSer.seConnecter(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          localStorage.setItem('access_token', response['token']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          this.showError = true;
          f.reset();
        },
      });
    } else {
      this.authSer.Inscription(f.value).subscribe({
        next: (response) => {
          alert(response['message']);
          this.toggleLoginShowBtn();
          f.reset();
        },
      });
    }
  }

  toggleLoginShowBtn() {
    this.loginShow = !this.loginShow;
  }

  resetHandler(f: NgForm) {
    f.reset();
  }

  genererInfos(f: NgForm) {
    // f.form.patchValue({ email: 'nidhal@gmail.com', password: '123456' });
    f.form.patchValue({ email: '', password: '' });
  }
}
