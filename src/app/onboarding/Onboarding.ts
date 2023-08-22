import {FormControl, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped, ɵValue} from "@angular/forms";

export class Onboarding {
  constructor(
    public eamsAppId: ɵValue<FormControl<string | null>> | undefined,
    public eamsAppName: ɵValue<FormControl<string | null>> | undefined,
    public eamsAppAcronym: ɵValue<FormControl<string | null>> | undefined,
    public serviceName: ɵValue<FormControl<string | null>> | undefined,
    public projectKeyJira: ɵValue<FormControl<string | null>> | undefined,
    public gitCloneUrlHttpsCI: ɵValue<FormControl<string | null>> | undefined,
    public gitCloneUrlHttpsCD: ɵValue<FormControl<string | null>> | undefined,
    public gitBranchNameCD: string | null,
    public lastDeployDateTimeProd: ɵValue<FormControl<string | null>> | undefined,
    public appHostingEnv: ɵValue<FormControl<string | null>> | undefined,
    public cicdTool: ɵTypedOrUntyped<string, ɵFormGroupValue<string>, any>,
    public advisoryTool: ɵValue<FormControl<string | null>> | undefined,
    public cdsidSpoc: ɵValue<FormControl<string | null>> | undefined,
    public cdsidLL6: ɵValue<FormControl<string | null>> | undefined,
    public cdsidLL5: ɵValue<FormControl<string | null>> | undefined
  ) {
  }
}
