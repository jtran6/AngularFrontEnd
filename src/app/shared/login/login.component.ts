import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/buyer-home/dashboard/home']);
  }

  forgotPassword(){
    this.router.navigate(['/forgot-password']);
  }

}
