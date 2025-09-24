import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/products.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  private service = inject(ProductService);

  products: any[] = []; 
  carrito: any[] = []; 
  total: number = 0;

  groupedProducts: { [key: string]: any[] } = {};

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (list) => {
        this.products = list;
        this.groupedProducts = this.groupByCategory(list);
      },
    });
  }

  private groupByCategory(products: any[]): { [key: string]: any[] } {
    return products.reduce((groups, product) => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }
      groups[product.category].push(product);
      return groups;
    }, {} as { [key: string]: any[] });
  }

  agg(product: any) {
    this.carrito.push(product);
    this.total += product.price;
  }

  remove(index: number) {
    this.total -= this.carrito[index].price;
    this.carrito.splice(index, 1);
  }
}
