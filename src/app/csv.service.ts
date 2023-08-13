import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http:HttpClient) {
    // this.getCsvData("./assets/Data.csv");
  }

  getCsvData(csvFilePath: string): Observable<string> {
    return this.http.get(csvFilePath, { responseType: 'text' });
  }

  parseCsvToJson(csvData: string): any[] {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const result: any[] = []; // Define the type of 'result' as an array of 'any'

    for (let i = 1; i < lines.length; i++) {
      const obj: any = {}; // Define the type of 'obj' as 'any'
      const currentLine = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
      result.push(obj);
    }

    return result;
  }
}
