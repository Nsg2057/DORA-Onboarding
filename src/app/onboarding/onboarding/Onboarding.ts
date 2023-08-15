export class Onboarding{
  constructor(
    public eamsAppId:string,
    public eamsAppName:string,
    public eamsAppAcronym:string,
    public serviceName:string,
    public projectKeyJira:string,
    public gitCloneUrlHttpsCI:string,
    public gitCloneUrlHttpsCD:string,
    public gitBranchNameCD:string,
    public lastDeployDateTimeProd:string,
    public appHostingEnv:string,
    public cicdTool:string,
    public advisoryTool:string,
    public cdsidSpoc:string,
    public cdsidLL6:string,
    public cdsidLL5:string
  ) {
  }
}
