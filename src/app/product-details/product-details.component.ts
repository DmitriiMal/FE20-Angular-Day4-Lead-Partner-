import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  id: number = 0;
  constructor(private route: ActivatedRoute) {
    // console.log(this.products);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['idFromLoop'];
      this.product = products[this.id];
    });
  }
}
