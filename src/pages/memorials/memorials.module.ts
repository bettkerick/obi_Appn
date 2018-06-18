import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemorialsPage } from './memorials';

@NgModule({
  declarations: [
    MemorialsPage,
  ],
  imports: [
    IonicPageModule.forChild(MemorialsPage),
  ],
})
export class MemorialsPageModule {}
