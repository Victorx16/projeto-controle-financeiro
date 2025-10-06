import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LancamentoEditComponent } from './components/lancamento-edit/lancamento-edit';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'editar/:id', component: LancamentoEditComponent }
];