import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  stackedData: any;
  stackedOptions: any;
  basicData: any;
  basicOptions: any;
  data: any;
  chartOptions: any;
  pie:any;


  constructor() { }

  ngOnInit(): void {
    this.stackedData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: '#e55353',
          data: [
              40,
              20,
              10,
              40,
              20,
              50,
              80
          ]
      }
    ]
        
  }
  this.stackedOptions = {
    tooltips: {
        mode: 'index',
        intersect: false
    },
    responsive: true,
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true
        }]
    }
};
this.basicData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
         type: 'line',
          label: 'First Dataset',
          data: [100, 0, 80, 90, 50, 60,80],
          fill: false,
          borderColor: '#808080',
          tension: .4
      },
      {
        type: 'line',
          label: 'Second Dataset',
          data: [12, 10, 70, 90, 60, 50, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
      }
  ]
};
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
};
this.data = {
  labels: ['VueJs','EmberJs','ReactJs','Angular'],
  datasets: [
      {
          data: [40, 80, 10],
          backgroundColor: [
              "red",
              "#36A2EB",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ]
      }
  ]
};
this.pie = {
  labels: ['Red','Green','Yellow'],
  datasets: [
      {
          data: [250, 50, 100],
          backgroundColor: [
              "red",
              "blue",
              "green"
          ],
          hoverBackgroundColor: [
              "#64B5F6",
              "#81C784",
              "#FFB74D"
          ]
      }
  ]
};


  

}
}
