import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConsumerBenefitsComponent } from './consumer-benefits/consumer-benefits.component';
import{AboutComponent} from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'mars', component: ProductDetailsComponent
  },
 
  { path: 'moon', component: ConsumerBenefitsComponent },
  { path: 'isro', component: AboutComponent }
 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
