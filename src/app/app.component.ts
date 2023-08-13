import { Component } from '@angular/core';
import {CsvService} from "./csv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DORA-Onboarding';
  jsonData:any;
  // eamsAppId: String;



constructor(private csvService:CsvService) {
  this.loadCsvData();

}

  async loadCsvData() {
    const csvFilePath = 'assets/Data.csv';

    this.csvService.getCsvData(csvFilePath).subscribe(csvData => {
      this.jsonData = this.csvService.parseCsvToJson(csvData);
      console.log(this.jsonData);
    });
  }

}


