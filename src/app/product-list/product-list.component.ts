import { Component, OnInit } from '@angular/core';
import { BuyerProduct } from 'ordercloud-javascript-sdk';

import { Auth, Products, Tokens } from 'ordercloud-javascript-sdk';
import {
  Configuration,
  ImpersonateTokenRequest,
} from 'ordercloud-javascript-sdk';
import { Me, Orders, LineItems } from 'ordercloud-javascript-sdk';

import { orderCloudProducts } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: any;

  constructor() {
    // orderCloudProducts().then((data) => {
    //   alert('did the load');
    //   alert(data.Items);
    //   this.products = data.Items;
    // });
  }

  ngOnInit() {
    Configuration.Set({
      baseApiUrl: 'https://sandboxapi.ordercloud.io',
      timeoutInMilliseconds: 20 * 1000,
    });
    Auth.ClientCredentials(
      'LuuTwjTgfyeZKsQOCg79xndpnAOZCs3MDJwxcwPFkBe7x0cICRaouaCWerZG',
      '8135B016-CB8B-43C4-ABF4-A357150B1164',
      ['FullAccess', 'Shopper']
    )
      .then((authResponse) => {
        Tokens.SetAccessToken(authResponse.access_token);
        Me.ListProducts().then(
          (productList) => (this.products = productList.Items)
        );
      })

      .catch((err) => {
        console.log(err);
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
