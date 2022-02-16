import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Iproduct } from "./product";
import { ProductService } from "./product.service";
@Component({
    
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
    constructor(private productService: ProductService){
    }


    pageTitle= "Product List";
    imageWidth = 50;
    imageMargin = 2;
    imageHeight = 39;
    showImage: boolean = false;
    errorMessage: string = ' ';
    
    
    private _listfilter: string = '';
    get listfilter():string{
      return this._listfilter;
    }
    
    set listfilter(value: string){
      this._listfilter = value;
      this.filteredProducts = this.performFilter(value);
    }
    
    filteredProducts: Iproduct[] = [];
    productlist: Iproduct[] = [];
  
    performFilter(filterby : string): Iproduct[]{
      filterby = filterby.toLowerCase();
      return this.productlist.filter((product: Iproduct) => product.productName.toLowerCase().includes(filterby));
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this.productService.getProducts().subscribe({
          next: products => {
            this.productlist = products;
            // console.log("Check :", this.productlist);
            this.filteredProducts = this.productlist;
          },
          error: err => this.errorMessage = err
        });
      
     }

  onRatingClicked(msg :string):void{
    this.pageTitle = 'Product List: ' +msg;
  }
}