import { Component } from '@angular/core';
import { GeneratePalette } from '../generate-palette/generate-palette';
import { UserActions } from '../user-actions/user-actions';

@Component({
  selector: 'app-header',
  imports: [GeneratePalette, UserActions],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
