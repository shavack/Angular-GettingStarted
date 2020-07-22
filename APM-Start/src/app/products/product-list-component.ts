import {Component} from '@angular/core';

@Component({
        selector: 'pm-products',
        templateUrl: './product-list-component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    displayImage: boolean = false;
    listFilter: string = 'cart';
    toggleImage(): void { this.displayImage = !this.displayImage};
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "12-02-2005",
            "description": "something",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "FXA-0023",
            "releaseDate": "12-02-2012",
            "description": "something1",
            "price": 322.99,
            "starRating": 3.2,
            "imageUrl": "assets/images/hammer.png"
        },
        {
            "productId": 6,
            "productName": "Saw",
            "productCode": "GDN-0023",
            "releaseDate": "12-02-2005",
            "description": "Kill",
            "price": 55.99,
            "starRating": 2.5,
            "imageUrl": "assets/images/saw.png"
        }
    ]
    getTitle(): string {return this.pageTitle;}
    
}