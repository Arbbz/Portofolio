import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [ButtonModule, RouterOutlet, FloatLabelModule, FormsModule, TextareaModule],
})
export class HeaderComponent {
  appName = 'Shw';
  value2: string | undefined;
}
