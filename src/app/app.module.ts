import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { SideComponent } from './side/side.component';
import { MainComponent } from './main/main.component';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {MenuModule} from 'primeng/menu';
import {DividerModule} from 'primeng/divider';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {RatingModule} from 'primeng/rating';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { ChartComponent } from './chart/chart.component';
import { GraphComponent } from './graph/graph.component';
import {GMapModule} from 'primeng/gmap';
import { TabViewModule } from 'primeng/tabview';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SideComponent,
    MainComponent,
    ColorComponent,
    ChartComponent,
    GraphComponent,
    PagenotfoundComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    TabMenuModule,
    CardModule,
    ChartModule,
    MenuModule,
    DividerModule,
    ProgressBarModule,
    TableModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    RatingModule,HttpClientModule,
    RatingModule,
    FormsModule,
    GMapModule,
    TabViewModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
