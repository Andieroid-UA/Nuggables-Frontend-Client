import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule],
  exports: [TimelineComponent]
})

export class TimelineComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getTimelineProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error: any) => {
        console.error('Error fetching timeline products', error);
      }
    });
  }
}
