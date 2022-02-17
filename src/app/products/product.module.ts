import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { convertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    convertToSpacesPipe,
    
  ],
  imports: [
    RouterModule.forChild([
      {path : 'products', component : ProductListComponent},
      {
        path : 'products/:id', 
        canActivate:[ProductDetailGuard],
        component: ProductDetailComponent
        
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
