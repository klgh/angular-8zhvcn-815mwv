import { Component, OnInit } from '@angular/core';
import { BuyerProduct, Product } from 'ordercloud-javascript-sdk';
import { orderCloudProducts } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: BuyerProduct[] = [];

  ngOnInit() {
    orderCloudProducts()
      .then((data) => {
        alert('did the load');
        alert(data.Items);
        this.products = data.Items;
      })
      .catch((e) => {
        alert(e);
      });
  }

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
