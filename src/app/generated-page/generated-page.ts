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
  url: string = '';
  constructor(private route: ActivatedRoute) {
  }
  
  params: string[] = [];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.palette = params.get('palette') || '';
    });
  }

  copyToClipboard(text: string): void {
    if(!navigator.clipboard){return;}
    navigator.clipboard.writeText(text);
  }
}
