import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  display1: any;
  items!: MenuItem[];
  // tabs!: MenuItem[];
  itemslist!: MenuItem[];
  poplist!: MenuItem[];




  ngOnInit(): void {
    this.itemslist = [
      {
        label: 'You have 5 notifications'
      },
      {
        icon: 'pi pi-fw pi-apple',
        label: 'New User registered',
      },
      {
        icon: 'pi pi-fw pi-bookmark-fill',
        label: ' User deleted',
      },
      {
        icon: 'pi pi-fw pi-box',
        label: 'Sales report is ready'
      },
      {
        icon: 'pi pi-fw pi-briefcase',
        label: 'New Client',
      },
      {
        icon: 'pi pi-fw pi-database',
        label: 'Server overloaded',
      }


    ]
    this.poplist=[
      {
        label: 'You have 5 pending tasks'
      },
      {
        label: 'Upgrade nmm & bower 0%'
      },
      {
        label: 'React JS Version'
      },
      {
        label: 'Vue Js Version'
      },
      {
        label: 'View all tasks'
      },
    ]


    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home'
      }
    ]
    // this.tabs = [
    //   { icon: 'pi pi-fw pi-list' },
    //   { icon: 'pi pi-fw pi-comment' },
    //   { icon: 'pi pi-fw pi-cog' }

    // ];

  }
  display() {
    this.display1 = true;

  }
  display2(){
    this.display1 = false;

  }
}