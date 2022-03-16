import { Me } from 'ordercloud-javascript-sdk';


// const createToken = () => {
//   return Auth.ClientCredentials(
//     'BcO7AqmD7dr40r1imJgEge7PsecEmxJzzlBQ7g5Htp0Z57v2JVOOsmuBtbez',
//     '6F6FA276-2D20-4874-9A18-69D601339817',
//     ['FullAccess', 'Shopper']
//   );
// };

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
];

export const orderCloudProducts = async () => {
  return Me.ListProducts();
};


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
