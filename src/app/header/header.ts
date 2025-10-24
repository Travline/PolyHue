import { Component, OnInit } from '@angular/core';
import { GeneratePalette } from '../generate-palette/generate-palette';
import { UserActions } from '../user-actions/user-actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [GeneratePalette, UserActions],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{
  url: string = '';
  
  constructor(private router: Router) {  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.url = this.router.url.split('/')[1] || '';
    });
  }  
}