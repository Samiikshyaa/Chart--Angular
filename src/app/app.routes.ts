import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ChartComponent } from './chart/chart.component';

export const routes: Routes = [
    {
        path: 'product',
        component: ProductComponent
    },{
        path: 'chart',
        component: ChartComponent
    }
];
