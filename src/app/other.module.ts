import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OtherComponent } from './other.component';

const routes: Routes = [
  {path: '', component: OtherComponent}
];

@NgModule({
   declarations: [OtherComponent],
  imports: [RouterModule.forChild(routes)]
})
export class OtherModule {}
