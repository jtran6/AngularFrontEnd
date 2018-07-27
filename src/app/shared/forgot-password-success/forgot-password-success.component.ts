import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-forgot-password-success',
  templateUrl: './forgot-password-success.component.html',
  styleUrls: ['./forgot-password-success.component.css']
})
export class ForgotPasswordSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnToLogin(){
    this.router.navigate(['/login']);
  }

}
