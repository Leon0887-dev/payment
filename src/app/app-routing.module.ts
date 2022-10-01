import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    canLoad:[LoginGuard]
  },
  {
    path: 'agendamentos',
    loadChildren: () =>
      import('./components/payment-scheduling/payment-scheduling.module').then(
        (m) => m.PaymentSchedulingModule
      ),
    canLoad: [AutenticacaoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
