import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
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
