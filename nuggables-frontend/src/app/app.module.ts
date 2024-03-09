import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './shared/components/products/product/product.component';
import { TimelineComponent } from './features/timeline/timeline.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, TimelineComponent],
  exports: [ProductComponent]
})
export class AppModule { }
