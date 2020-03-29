import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'productName', 'price'];
  dataSource: IProduct[] = [];
  pageTitle = 'Product List';
  errorMessage = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.dataSource = products;
      },
      error: err => this.errorMessage = err
    });
  }

}
