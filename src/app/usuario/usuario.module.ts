import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    ContentComponent,
    NavComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    ContentComponent
  ]
})
export class UsuarioModule { }
