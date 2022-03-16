import { Component, OnInit } from '@angular/core';
import { Auth, Configuration, Me, Tokens } from 'ordercloud-javascript-sdk';

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
      'BcO7AqmD7dr40r1imJgEge7PsecEmxJzzlBQ7g5Htp0Z57v2JVOOsmuBtbez',
      '6F6FA276-2D20-4874-9A18-69D601339817',
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
