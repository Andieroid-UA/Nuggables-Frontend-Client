import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { TimelineComponent } from './features/timeline/timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nuggables-frontend';
}
