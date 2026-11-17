import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  // Default route: loads Home component
  { path: '', component: Home },
  // Route for login page
  { path: 'login', component: Login },
  // Route for registration page
  { path: 'register', component: Register },
  // Wildcard route: redirects any unknown path to Home
  { path: '**', redirectTo: '' },
];
