import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.HekimmasterPatientModule),
      },
      {
        path: 'randevu',
        loadChildren: () => import('./randevu/randevu.module').then(m => m.HekimmasterRandevuModule),
      },
      {
        path: 'day',
        loadChildren: () => import('./day/day.module').then(m => m.HekimmasterDayModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class HekimmasterEntityModule {}
