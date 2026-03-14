import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { ProductDetails } from './pages/product/product-details/product-details';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'product', component: Product },
    { path: 'product/:slug', component: ProductDetails },
    { path: 'stories', component: Stories },

];

