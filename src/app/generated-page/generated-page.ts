import { Component, OnInit } from '@angular/core';
import { GeneratedColors } from '../palette/generated-color';
import { ActivatedRoute } from '@angular/router';
import { SplitHexPalettePipe } from '../palette/split-hex-palette-pipe';

@Component({
  selector: 'app-generated-page',
  imports: [SplitHexPalettePipe],
  templateUrl: './generated-page.html',
  styleUrl: './generated-page.scss'
})
export class GeneratedPage implements OnInit {
  palette: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.palette = this.route.snapshot.paramMap.get('palette') || '';
  }
}
