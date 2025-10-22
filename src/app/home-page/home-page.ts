import { Component } from '@angular/core';
import { GeneratePalette } from '../generate-palette/generate-palette';

@Component({
  selector: 'app-home-page',
  imports: [GeneratePalette],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
