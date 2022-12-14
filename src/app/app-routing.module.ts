import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { SideComponent } from './side/side.component';
import { MainComponent } from './main/main.component';
import { ChartComponent } from './chart/chart.component';
import { GraphComponent } from './graph/graph.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




const routes: Routes = [
 
  { path: 'color', component: ColorComponent },
  { path: 'main', component: MainComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

