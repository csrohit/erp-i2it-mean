import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    userName: 'admin',
    password: '1234'
  }

  constructor(
    private authService: AuthService
  ) { }

  onSubmit(loginForm: NgForm): void {
    this.authService.login(this.user).subscribe( data => {
      console.log(data);
    });
    console.log(loginForm.value);
  }

  ngOnInit(): void {
  }

}
