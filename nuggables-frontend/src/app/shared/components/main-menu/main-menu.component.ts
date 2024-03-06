import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CannabisComponent } from '../../element-threejs/cannabis/cannabis.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterModule, CannabisComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {

}
