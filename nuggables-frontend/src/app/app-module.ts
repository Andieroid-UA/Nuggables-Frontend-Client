import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AuthComponent } from './auth/auth.component';
import { LibraryComponent } from './content/library/library.component';
import { PlantsimComponent } from './content/plantsim/plantsim.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContactComponent } from './main-menu/contact/contact.component';
import { ResourcesComponent } from './main-menu/resources/resources.component';
import { ModalComponent } from './modal/modal.component';
import { ModelsComponent } from './models/models.component';
import { HeaderComponent } from './shared/header/header.component';
import { CubeMovingComponent } from './shared/element-threejs/cube-moving/cube-moving.component';
import { CubeComponent } from './shared/element-threejs/cube/cube.component';
import { PanoramaComponent } from './shared/element-threejs/panorama/panorama.component';
import { Panorama2Component } from './shared/element-threejs/panorama2/panorama2.component';


@NgModule({
    declarations: [
      AlertComponent,
      AuthComponent,
      LibraryComponent,
      PlantsimComponent,
      MainMenuComponent,
      ContactComponent,
      ResourcesComponent,
      ModalComponent,
      ModelsComponent,
      HeaderComponent,
      CubeMovingComponent,
      CubeComponent,
      PanoramaComponent,
      Panorama2Component
    ],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule
    ]
})
export class AppModule { }
