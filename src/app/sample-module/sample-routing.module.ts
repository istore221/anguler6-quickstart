import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlaComponent} from './bla/bla.component'


const routes: Routes = [
    { path: "sample", component: BlaComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SampleRoutingModule { }
