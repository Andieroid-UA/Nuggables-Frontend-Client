import { Routes } from '@angular/router';
import { CubeComponent } from './shared/element-threejs/cube/cube.component';
import { CubeMovingComponent } from './shared/element-threejs/cube-moving/cube-moving.component';
import { PanoramaComponent } from './shared/element-threejs/panorama/panorama.component';
import { Panorama2Component } from './shared/element-threejs/panorama2/panorama2.component';
import { CannabisComponent } from './shared/element-threejs/cannabis/cannabis.component';
import { AuthComponent } from './auth/auth.component';
import { CannabisLogComponent } from './shared/components/cannabis-log/cannabis-log.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { LibraryMenuComponent } from './shared/components/library-menu/library-menu.component';
import { LibraryComponent } from './shared/components/library/library.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { PlantsimComponent } from './shared/components/plantsim/plantsim.component';
import { ResourcesComponent } from './shared/components/resources/resources.component';

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
