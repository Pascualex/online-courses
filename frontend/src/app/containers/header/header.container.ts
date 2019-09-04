import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-container',
  templateUrl: './header.container.html',
  styleUrls: ['./header.container.scss']
})
export class HeaderContainer implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void { }

  public goToHome(): void {
    this.router.navigateByUrl('');
  }
}
