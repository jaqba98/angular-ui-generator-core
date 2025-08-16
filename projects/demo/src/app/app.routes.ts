import { Routes } from '@angular/router';

import { routesGenerator } from '../../../angular-ui-generator/src/public-api';
import { HomeView } from './view/home.view';

export const routes: Routes = routesGenerator(HomeView);
