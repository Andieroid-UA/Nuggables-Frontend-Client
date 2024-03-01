import { Routes } from '@angular/router';
import { ContactComponent } from './main-menu/contact/contact.component';
import { ResourcesComponent } from './main-menu/resources/resources.component';
import { LibraryComponent } from './content/library-menu/library/library.component';
import { PlantsimComponent } from './content/plantsim/plantsim.component';
import { AuthComponent } from './auth/auth.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CannabisLogComponent } from './content/library-menu/cannabis-log/cannabis-log.component';
import { LibraryMenuComponent } from './content/library-menu/library-menu.component';
import { CubeComponent } from './shared/element-threejs/cube/cube.component';
import { CubeMovingComponent } from './shared/element-threejs/cube-moving/cube-moving.component';
import { PanoramaComponent } from './shared/element-threejs/panorama/panorama.component';
import { Panorama2Component } from './shared/element-threejs/panorama2/panorama2.component';
import { CannabisComponent } from './shared/element-threejs/cannabis/cannabis.component';

export const routes: Routes = [
//----------------TEST PAGES-------------------
{ path: 'cube', component: CubeComponent },
{ path: 'cube-moving', component: CubeMovingComponent },
{ path: 'panorama', component: PanoramaComponent },
{ path: 'panorama2', component: Panorama2Component },
{ path: 'cannabis', component: CannabisComponent },
//----------------MAIN PAGE-------------------
{ path: '', redirectTo: '/main', pathMatch: 'full' },
{ path: 'main', component: MainMenuComponent},
{ path: 'contact', component: ContactComponent},
{ path: 'resources', component: ResourcesComponent},
//--------------CANNABIS LIBRARY--------------------------
{ path: 'libmenu', component: LibraryMenuComponent},
{ path: 'library', component: LibraryComponent},
{ path: 'plantsim', component: PlantsimComponent},
//--------------CANNABIS LOG--------------------------
{ path: 'log', component: CannabisLogComponent},
//--------------LOGIN/SIGNUP/AUTH------------------------
//{ path: 'login', component: LoginComponent},
//{ path: 'signup', component: SignupComponent},
{ path: 'auth', component: AuthComponent}
];
