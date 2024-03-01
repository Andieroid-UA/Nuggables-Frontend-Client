import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { CubeComponent } from './shared/element-threejs/cube/cube.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nuggables-frontend';
}
