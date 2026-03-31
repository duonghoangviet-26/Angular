import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { ProductDetails } from './pages/product/product-details/product-details';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { Story } from './view/story/story';
import { EditPage } from './pages/edit-page/edit-page';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'product', component: Product },
    { path: 'product/:slug', component: ProductDetails },
    { path: 'stories', component: Stories },
    { path: 'add-story', component: AddStory },
    { path: 'view-story', component: Story },
    { path: 'edit-story', component: EditPage },


];

