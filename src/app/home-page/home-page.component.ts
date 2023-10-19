import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../IProducts';
import { products } from '../products';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  products: Iproducts[] = products;

  constructor() {}
  ngOnInit(): void {}
}
