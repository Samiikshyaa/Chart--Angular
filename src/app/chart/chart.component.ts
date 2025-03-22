import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../master.service';
import { salesdata } from '../model/salesdata';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartdata: salesdata[] = [];
  labeldata: number[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadcharddata();
  }

  loadcharddata() {
    this.service.loadsalesdata().subscribe(item => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.map(o => {
          this.labeldata.push(o.year);
          this.realdata.push(o.amount);
          this.colordata.push(o.colorcode);
        });
        this.Renderbarchar(this.labeldata, this.realdata, this.colordata);
        this.Renderpiechar(this.labeldata, this.realdata, this.colordata);
        this.Renderdonutchar(this.labeldata, this.realdata, this.colordata);
        this.Renderpachar(this.labeldata, this.realdata, this.colordata);
        this.Renderredarchar(this.labeldata, this.realdata, this.colordata);
        this.Renderlineshotchar(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  Renderbarchar(labeldata: any, valuedata: any, colordata: any){
    this.Renderchar(labeldata,valuedata,colordata,'barchart','bar')
  }

  Renderpiechar(labeldata: any, valuedata: any, colordata: any){
    this.Renderchar(labeldata,valuedata,colordata,'piechart','pie')
  }

  Renderdonutchar(labeldata: any, valuedata: any, colordata: any){
    this.Renderchar(labeldata,valuedata,colordata,'donutchart','doughnut')
  } 

  Renderpachar(labeldata: any, valuedata: any, colordata: any){
    this.Renderchar(labeldata,valuedata,colordata,'pachart','polarArea')
  } 

  Renderredarchar(labeldata: any, valuedata: any, colordata: any){
    this.Renderchar(labeldata,valuedata,colordata,'redarchart','radar')
  } 

  Renderlineshotchar(labeldata: any, valuedata: any, colordata: any){
    this.Renderchar(labeldata,valuedata,colordata,'lschart','line')
  } 

  Renderchar(labeldata: any, valuedata: any, colordata: any, chartid:string, charttype: any) {
    const mychar = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [{
          label: 'yearly sales',
          data: valuedata,
          backgroundColor: colordata
        }]
      },
      options: {
        // scales:{
        //   y:{
        //     beginAtZero: true
        //   }
        // }
      }
    });
  }
}