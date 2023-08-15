import { Component } from '@angular/core';
import {CsvService} from "../csv.service";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],

})
export class OnboardingComponent {
  uuid: string | null = null;

constructor(private csvService: CsvService) {
this.generateUuid();
}
  generateUuid(): void {
    this.uuid = "DORA" + Date.now();
    console.log("generated UUID" , this.uuid);
    this.loadCsvData();
  }

  async loadCsvData() {
    const csvFilePath = 'assets/data.csv'; // Replace with your CSV file path

    this.csvService.getCsvData(csvFilePath).subscribe(csvData => {
      const jsonData = this.csvService.parseCsvToJson(csvData);
      console.log(jsonData); // JSON data from CSV
    });
  }


}
