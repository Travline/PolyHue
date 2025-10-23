import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitHexPalette'
})

export class SplitHexPalettePipe implements PipeTransform {
  transform(palette: string): string[] {
    const pattern: RegExp = /^[0-9A-F]{5}(?:-[0-9A-F]{5}){4}$/i;
    if (pattern.test(palette)) {
      palette.toUpperCase();
      return palette.split('-').map(hex => '#' + hex);
    }
    return [];
  }
}