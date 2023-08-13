import { Component } from '@angular/core';
import {CsvService} from "./csv.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DORA-Onboarding';
  jsonData:JSON;
  eamsAppId: String;
  


constructor(private csvService:CsvService) {
  this.loadCsvData();
}

  async loadCsvData() {
    const csvFilePath = 'assets/Data.csv'; // Replace with your CSV file path

    this.csvService.getCsvData(csvFilePath).subscribe(csvData => {
      this.jsonData = this.csvService.parseCsvToJson(csvData);

      console.log(this.jsonData); // JSON data from CSV
    });
  }

  iterateJsonObject() {
    const keys = Object.keys(this.myJsonObject);
    for (const key of keys) {
      const value = this.myJsonObject[key];
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }
}


