import {Component, OnInit} from '@angular/core';
import {CsvService} from "../csv.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {Onboarding} from "./Onboarding";
import {MatRadioChange} from "@angular/material/radio";


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],

})
export class OnboardingComponent implements OnInit {

  OnboardingForm = new FormGroup({
    eamsAppIdFormControl: new FormControl(''),
    eamsAppNameFormControl: new FormControl(''),
    eamsAppAcronymsFormControl: new FormControl(''),
    appHostingEnvFormControl: new FormControl(''),
    cicdToolControl: new FormGroup(''),
    serviceNameControl: new FormControl(''),
    jiraIdControl: new FormControl(''),
    gitCloneUrlCIControl: new FormControl(''),
    gitCloneUrlCDControl: new FormControl(''),
    gitBranchNameCDControl: new FormControl(''),
    deploymentDateControl: new FormControl(''),
    advisoryToolControl: new FormControl(''),
    cdsidSpocControl: new FormControl(''),
    cdsidLL6Control: new FormControl(''),
    cdsidLL5Control: new FormControl(''),
    radioButtonControl: new FormControl(false),
    multiValueControl: new FormControl('')

  });

  uuid: string | null = null;
  json: any[] = [];

  eamsAppIds: any[] = [];
  filteredeEamsAppIds: Observable<string[]> | undefined;

  eamsAppNames: string[] = [];
  filteredEamsAppNames: Observable<string[]> | undefined;


  eamsAppAcronyms: string[] = [];
  filteredEamsAppAcronyms: Observable<string[]> | undefined;

  appHostingEnvs: string[] = [];
  filteredappHostingEnvs: Observable<string[]> | undefined;

  cicdTools: string[] = [];

 advisoryTools: string[] = [];

  constructor(private csvService: CsvService, private fb: FormBuilder) {
    this.generateUuid();

  }

  ngOnInit() {

    this.loadCsvData();
    this.autoCompleteEamsAppIds();
    this.autoCompleteEamsAppNames();
    this.autoCompleteEamsAppAcronyms();
    this.autoCompleteAppHostingEnvs();
    Object.keys(this.OnboardingForm.controls).forEach(controlName => {
      this.OnboardingForm.get(controlName)?.setValidators(Validators.required);
      this.OnboardingForm.get(controlName)?.updateValueAndValidity();
    });
  }

  //Gettting EamsAppIds when user starts typing
  autoCompleteEamsAppIds() {
    this.filteredeEamsAppIds = this.OnboardingForm.get("eamsAppIdFormControl")?.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEamsAppIds(value || '')),
    );
  }

  private _filterEamsAppIds(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.eamsAppIds.filter(option => option.toLowerCase().includes(filterValue));
  }

  //Filtering EamsAppNames for autocompletion
  private autoCompleteEamsAppNames() {
    this.filteredEamsAppNames = this.OnboardingForm.get('eamsAppNameFormControl')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEamsAppNames(value || '')),
    );
  }

  private _filterEamsAppNames(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.eamsAppNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  private autoCompleteEamsAppAcronyms() {
    this.filteredEamsAppAcronyms = this.OnboardingForm.get('eamsAppAcronymsFormControl')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEamsAppAcronyms(value || '')),
    );
  }

  private _filterEamsAppAcronyms(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.eamsAppAcronyms.filter(option => option.toLowerCase().includes(filterValue));
  }

  private autoCompleteAppHostingEnvs() {
    this.filteredappHostingEnvs = this.OnboardingForm.get('appHostingEnvFormControl')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filterAppHostingEnvs(value || '')),
    );
  }

  private _filterAppHostingEnvs(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.appHostingEnvs.filter(option => option.toLowerCase().includes(filterValue));
  }

  generateUuid(): void {
    this.uuid = "DORA" + Date.now();
  }

  //Loading CSV Data and Converting it to JSON and reading JSON values and adding them to required variables for autocompletion
  async loadCsvData(): Promise<any> {
    const csvFilePath = 'assets/Data.csv';

    this.csvService.getCsvData(csvFilePath).subscribe(csvData => {
      this.json = this.csvService.parseCsvToJson(csvData);
      console.log(this.json);
      if (this.json && this.json.length > 0) {
        this.eamsAppIds = this.json.map((entry) => entry.eamsAppId);
        this.eamsAppNames = this.json.map((entry) => entry.eamsAppName);
        this.eamsAppAcronyms = this.json.map((entry) => entry.eamsAppAcronym);
        this.appHostingEnvs = this.json.map((entry) => entry.appHostingEnv);
        this.cicdTools = this.json.map((entry) => entry.cicdTool);
        this.advisoryTools = this.json.map((entry) => entry.advisoryTool);

        console.log('eamsAppIds:', this.eamsAppIds);
        console.log('eamsAppName', this.eamsAppNames);
        console.log('eamsAppAcronym', this.eamsAppAcronyms);
        console.log('appHostingEnvs', this.appHostingEnvs);
        console.log('CI CD tools', this.cicdTools);
      }
    });

  }

  onSubmit() {
    // Get values from the form controls
    const formValues = this.OnboardingForm.controls;

    // Create an instance of the Onboarding class
    const onboardingData = new Onboarding(
      formValues.eamsAppIdFormControl.value,
      formValues.eamsAppNameFormControl.value,
      formValues.eamsAppAcronymsFormControl.value,
      formValues.serviceNameControl.value,
      formValues.jiraIdControl.value,
      formValues.gitCloneUrlCIControl.value,
      formValues.gitCloneUrlCDControl.value,
      formValues.gitBranchNameCDControl.value,
      formValues.deploymentDateControl.value,
      formValues.appHostingEnvFormControl.value,
      formValues.cicdToolControl.value,
      formValues.advisoryToolControl.value,
      formValues.cdsidSpocControl.value,
      formValues.cdsidLL6Control.value,
      formValues.cdsidLL5Control.value,

    );

    // Now you can use the 'onboardingData' object as neede
    console.log(onboardingData);
  }

  ciCdBranches($event: MatRadioChange){

  }
  addCICDTool (newValue: string): void {
    newValue = newValue.trim();
    if(!newValue) {return;}
    this.cicdTools.push(newValue);
  }
  addAdvisoryTool (newValue: string): void {
    newValue = newValue.trim();
    if(!newValue) {return;}
    this.advisoryTools.push(newValue);
  }


}

