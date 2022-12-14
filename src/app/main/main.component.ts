import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { reduce } from 'rxjs';
import { content } from '../product';



@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    basicData: any;
    basicOptions: any;
    lineStylesData: any;
    horizontalOptions: any;
    progress: any;
    products!: Product[];
    content: any;
    column: any;
    clients: any;
    carding: any;
    socialmedia: any;




    items!: MenuItem[];
    constructor(private productService: ProductService) { }
    ngOnInit(): void {


        this.socialmedia = [
            {
                icon: 'pi pi-fw pi-facebook',
                "count": "89k",
                "content": "FRNDS",
                "count1": "459",
                "content1": "FEEDS",
            },
            {

                icon: 'pi pi-fw pi-twitter',
                "count": "973k",
                "content": "FOLLOWERS",
                "count1": "1.792",
                "content1": "TWEETS",
            },
            {

                icon: 'pi pi-fw pi-linkedin',
                "count": "500",
                "content": "CONTACTS",
                "count1": "1.292",
                "content1": "FEEDS",
            },
            {

                icon: 'pi pi-fw pi-calendar',
                "count": "12+",
                "content": "EVENTS",
                "count1": "4",
                "content1": "MEETINGS",
            }
        ]


        this.carding = [
            {
                "nmbr": "26k",
                "percentage": "(-12.4% )",
                "head": "Users"
            },
            {
                "nmbr": "$6.200",
                "percentage": "(40.9% )",
                "head": "Income"
            },
            {
                "nmbr": "2.49",
                "percentage": "(84.7% )",
                "head": "ConversionRate"
            },
            {
                "nmbr": "44k",
                "percentage": " (-23.6% )",
                "head": "Sessions"
            }
        ]

        this.clients = [
            {
                "name": "New Clients",
                "count": "9,123"
            },
            {
                "name": "Recurring Clients",
                "count": "22,643"

            },
            {
                "name": "Page Views",
                "count": "78,623"
            },
            {
                "name": "Organic",
                "count": "49,123"
            }
        ]



        this.basicData = {
            labels: ['', '', '', '', '', '', ''],
            datasets: [
                {
                    label: ' ',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: true,
                    borderColor: '#fff',
                },

            ]
        };
        this.items = [


            { label: 'Action' },
            { label: 'Another action' },
            { label: 'Something else here' },
            { label: 'Separated link' }



        ]
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        }
        this.lineStylesData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [50, 220, 80, 90, 220, 110, 107, 170, 53, 187, 154, 63],
                    fill: true,
                    tension: .4,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                    fill: false,
                    borderDash: [15, 15],
                    tension: .4,
                    borderColor: '#FFA726'
                },
                {
                    label: 'Third Dataset',
                    data: [67, 139, 51, 106, 120, 160, 85, 52, 52, 95, 70, 143, 143],
                    fill: false,
                    borderColor: 'green',
                    tension: .4,

                }
            ]
        };



        this.productService.getProductsSmall().then(data => this.products = data);
    }

}



