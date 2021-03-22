import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlantComponent } from './plant/plant.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'plant',
    component: PlantComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
