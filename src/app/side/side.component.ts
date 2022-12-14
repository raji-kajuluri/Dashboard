import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Badge } from 'primeng/badge';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  constructor() { }
  show: boolean = false;
  sidelist!: MenuItem[];
  orderlist!:MenuItem[];
  list!:MenuItem[];
  activelist!:MenuItem[];
  

 
  
 
  ngOnInit(): void {
    this.show = true;
    this.activelist=[
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-prime',
        badge:'NEW',
        routerLink:'/main'

      }
    ]
    this.list=[
      {
        label: 'Colors',
        icon: 'pi pi-fw pi-prime',
        routerLink:'/color'
        

      },
      {
        label: 'Typography',
        icon: 'pi pi-fw pi-pencil',
        routerLink:'/pagenotfound'

      }
    ]
    
    this.sidelist = [

      {
        label: 'Base',
        icon: 'pi pi-fw pi-star',
        items: [
          {
            label: 'Accordion',

          },
          {
            label: 'Breadcrumbs',

          },
          {
            label: 'Cards',

          },
          {
            label: 'Carousel',

          },
          {
            label: 'Collapse',

          },
          {
            label: 'List Group',

          },
          {
            label: 'Navs & Tabs',

          },
          {
            label: 'Pagination',

          },
          {
            label: 'Placeholders',

          },
          {
            label: 'Popovers',

          },
          {
            label: 'Progress',

          }, {
            label: 'Spinners',

          },
          {
            label: 'Tables',

          },
          {
            label: 'Tabs',

          },
          {
            label: 'Tooltips',

          }
        ]
      },
      {
        label: 'Buttons',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Buttons'

          },
          {
            label: 'Button groups'

          },
          {
            label: 'Dropdowns'

          },
          {
            label: 'Loading Button',
            badge:'PRO'
          },


        ]
      },
      {
        label: 'Calender',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Form Control'
           
          },
          {
            label: 'Select'
          },
          {
            label: ' Multi Select',
            badge:'PRO'
          },
          {
            label: 'Checks & Radios'
          },
          {
            label: 'Range'
          },
          {
            label: 'Input Group'
          },
          {
            label: 'Floating Labels'
          },
          {
            label: 'Layout'
          },
          {
            label: 'Date Picker',
            badge:'PRO'
          },
          {
            label: 'Date Range Picker',
            badge:'PRO'
          },
          {
            label: 'Time Picker',
            badge:'PRO'
          },
          {
            label: 'Validation'
          },
        ]
      },
      {
        label: 'Icons',
        icon: 'pi pi-fw pi-star',
        items: [
          {
            label: 'CoreUI Free',
            badge:'FREE'
          },
          {
            label: 'CoreUI Flags'
            
          },
          {
            label: 'CoreUI Brands'
            
          },
        ]
      },
      {
        label: 'Notifications',
        icon: 'pi pi-fw pi-star',
        items: [
          {
            label: 'Alerts'
            
          },
          {
            label: 'Badges'
            
          },
          {
            label: 'Modal'
            
          },
          {
            label: 'Toast'
            
          },
        ]
      },
      {
        label: 'Widgets',
        icon: 'pi pi-fw pi-star',  
        badge:'NEW',
        routerLink:'/pagenotfound'
      },
      {
        label: 'Smart',
        icon: 'pi pi-fw pi-star',  
        badge:'NEW',
        routerLink:'/pagenotfound'
      }
    ]
    this.orderlist=[
      {
        label: 'Calender',
        icon:'pi pi-calendar',
        routerLink:'/pagenotfound'

      },
      {
        label: 'Charts',
        icon:'pi  pi-chart-bar',
        routerLink:'/chart'

      },
      {
        label: 'Graphs',
        icon:'pi  pi-map',
        routerLink:'/graph'

      },
    ]
  }

}

