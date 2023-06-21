import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Components/inicio/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _login: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this._login.removeLocalStorage();
    this._router.navigate(['/inicio']);
  }
}
