export class Command {
  deploymentOption: string;
  deploymentMachine: string;
  STACK_NAME: string;
  ENVIRONMENT: string;
  GIT_TAG: string;
  RESOURCE: string;
  RESOURCE_SUBTYPE: string;
  COST_CENTER_TAG: string;
  DELETE_S3_STATIC_IPs: string;
  NEW_SPLITTER_DEPLOYED: string;
  SPLITTER_STACK_NAME: string;
  HOLD_REMOVAL_SERVICE_ROUTE53: string;
  PROXY_ROUTE53: string;
  SN_SHORT_DESCRIPTION: string;
  SN_DESCRIPTION: string;
  VERSIONID: string;
  SN_USER: string;
  SN_PW: string;
  INSTANCE: string;
  IS_PRODUCTION: string;

  constructor() {
    this.deploymentOption = "Deploy Component";
    this.deploymentMachine = "EC2";
    this.NEW_SPLITTER_DEPLOYED = "false";
    this.DELETE_S3_STATIC_IPs = "false";
    this.ENVIRONMENT = "nonprod";
    this.INSTANCE = "test";
    this.IS_PRODUCTION = "false";
  }

  setDeploymentMachine(deploymentMachine: string) {
    this.deploymentMachine = deploymentMachine;
  }
  getDeploymentMachine(): string {
    return this.deploymentMachine;
  }
  setInstance(INSTANCE: string) {
    this.INSTANCE = INSTANCE;
  }
  getInstance(): string {
    return this.INSTANCE;
  }
  setIsProduction(IS_PRODUCTION: string) {
    this.IS_PRODUCTION = IS_PRODUCTION;
  }
  getIsProduction(): string {
    return this.IS_PRODUCTION;
  }
  setDeploymentOption(deploymentOption: string) {
    this.deploymentOption = deploymentOption;
  }
  getDeploymentOption(): string {
    return this.deploymentOption;
  }
  setSTACK_NAME(STACK_NAME: string) {
    this.STACK_NAME = STACK_NAME;
  }
  getSTACK_NAME(): string {
    return this.STACK_NAME;
  }
  setENVIRONEMNT(ENVIRONMENT: string) {
    this.ENVIRONMENT = ENVIRONMENT;
  }
  getENVIRONEMNT(): string {
    return this.ENVIRONMENT;
  }
  setGitTag(GIT_TAG: string) {
    this.GIT_TAG = GIT_TAG;
  }
  getGitTag(): string {
    return this.GIT_TAG;
  }
  setReource(RESOURCE: string) {
    this.RESOURCE = RESOURCE;
  }
  getResource(): string {
    return this.RESOURCE;
  }
  setReourceSubType(RESOURCE_SUBTYPE: string) {
    this.RESOURCE_SUBTYPE = RESOURCE_SUBTYPE;
  }
  getResourceSubType(): string {
    return this.RESOURCE_SUBTYPE;
  }
  setCostCenterTag(COST_CENTER_TAG: string) {
    this.COST_CENTER_TAG = COST_CENTER_TAG;
  }
  getCostCenterTag(): string {
    return this.COST_CENTER_TAG;
  }
  setDeleteStaticIps(DELETE_S3_STATIC_IPs: string) {
    this.DELETE_S3_STATIC_IPs = DELETE_S3_STATIC_IPs;
  }
  isDeleteStaticIps(): string {
    return this.DELETE_S3_STATIC_IPs;
  }
  setNewSplitterDeployed(NEW_SPLITTER_DEPLOYED: string) {
    this.NEW_SPLITTER_DEPLOYED = NEW_SPLITTER_DEPLOYED;
  }
  isNewSplitterDeployed(): string {
    return this.NEW_SPLITTER_DEPLOYED;
  }
  setSplitterStackName(SPLITTER_STACK_NAME: string) {
    this.SPLITTER_STACK_NAME = SPLITTER_STACK_NAME;
  }
  getSplitterStackName(): string {
    return this.SPLITTER_STACK_NAME;
  }
  setHoldRemovalServiceRoute53(HOLD_REMOVAL_SERVICE_ROUTE53: string) {
    this.HOLD_REMOVAL_SERVICE_ROUTE53 = HOLD_REMOVAL_SERVICE_ROUTE53;
  }
  getHoldRemovalServiceRoute53(): string {
    return this.HOLD_REMOVAL_SERVICE_ROUTE53;
  }
  setProxyRoute53(PROXY_ROUTE53: string) {
    this.PROXY_ROUTE53 = PROXY_ROUTE53;
  }
  getProxyRoute53(): string {
    return this.PROXY_ROUTE53;
  }
  setSnShortDescription(SN_SHORT_DESCRIPTION: string) {
    this.SN_SHORT_DESCRIPTION = SN_SHORT_DESCRIPTION;
  }
  getSnShortDescription(): string {
    return this.SN_SHORT_DESCRIPTION;
  }
  setSnDescription(SN_DESCRIPTION: string) {
    this.SN_DESCRIPTION = SN_DESCRIPTION;
  }
  getSnDescription(): string {
    return this.SN_DESCRIPTION;
  }
  setVersionId(VERSIONID: string) {
    this.VERSIONID = VERSIONID;
  }
  getVersionId(): string {
    return this.VERSIONID;
  }
  setSnUser(SN_USER: string) {
    this.SN_USER = SN_USER;
  }
  getSnUser(): string {
    return this.SN_USER;
  }
  setSnPw(SN_PW: string) {
    this.SN_PW = SN_PW;
  }
  getSnPw(): string {
    return this.SN_PW;
  }
}
