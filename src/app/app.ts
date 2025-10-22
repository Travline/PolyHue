import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { GeneratePalette } from "./generate-palette/generate-palette";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, GeneratePalette],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  ola = 'ola'
}
