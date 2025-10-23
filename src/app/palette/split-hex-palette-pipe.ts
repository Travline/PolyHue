import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitHexPalette'
})

export class SplitHexPalettePipe implements PipeTransform {
  transform(palette: string): string[] | undefined{
    const pattern: RegExp = /^[0-9A-F]{6}(?:-[0-9A-F]{6}){4}$/i;
    if (pattern.test(palette)) {
      palette = palette.toUpperCase();
      return palette.split('-').map(hex => '#' + hex);
    }
    return undefined;
  }
}