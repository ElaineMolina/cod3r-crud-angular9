import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];
  dataSource = new MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }

}

