import { Component, OnInit, ViewChild } from "@angular/core";
import { Command } from "../command/command.model";
import { EC2ChangeRequest } from "../args/mandatory/ec2changerequest.enum";
import { EC2Component } from "../args/mandatory/ec2component.enum";
import { EC2Pipeline } from "../args/mandatory/ec2pipeline.enum";
import { GitlabChangeRequest } from "../args/mandatory/gitlabchangerequest.enum";
import { GitlabComponent } from "../args/mandatory/gitlabcomponent.enum";
import { GitlabPipeline } from "../args/mandatory/gitlabpipeline.enum";
import { DeploymentComponents } from "../json/deployment-component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  deploymentComponents: DeploymentComponents = new DeploymentComponents();
  title = "Command Generator";
  ec2ChangeRequestArgs = EC2ChangeRequest;
  ec2ComponentArgs = EC2Component;
  ec2PipelineArgs = EC2Pipeline;
  gitlabChangeRequestArgs = GitlabChangeRequest;
  gitlabComponentArgs = GitlabComponent;
  gitlabPipelineArgs = GitlabPipeline;
  ngOnInit() {
    this.isDeployComponent = true;
    this.isDeploymentMachineEC2 = true;
  }
  hideCommandDisplay = true;
  @ViewChild("cmdGenForm") cmdGenForm;
  ngAfterViewInit() {
    this.cmdGenForm.form.valueChanges.subscribe(change => {
      this.hideCommandDisplay = true;
      this.generateCommand();
    });
  }
  command: Command = new Command();
  isDeployComponent = false;
  isRunPipeline = false;
  isChangeRequest = false;
  isDeploymentMachineEC2 = false;
  isDeploymentMachineGitlab = false;
  resource = null;
  resources = Object.keys;
  resourceSubType = null;
  resourceSubTypes = null;
  changeDeploymentType(deploymentOption) {
    this.isDeployComponent = deploymentOption === "Deploy Component";
    this.isRunPipeline = deploymentOption === "Run Pipeline";
    this.isChangeRequest = deploymentOption === "snticket";
  }
  changeResource(value: string) {
    this.resource = value;
    this.resourceSubTypes = this.deploymentComponents.resourceMap[
      this.resource
    ];
    this.generateCommand();
  }
  changeResourceSubType(value: string) {
    this.resourceSubType = value;
    this.generateCommand();
  }
  changeDeploymentMachine(deploymentMachine) {
    this.isDeploymentMachineEC2 = deploymentMachine === "EC2";
    this.isDeploymentMachineGitlab = deploymentMachine === "gitlab";
  }
  finalCommand: string;
  deploymentMachineCommand: any;
  isFormValid = false;
  invalidFields = null;
  val = null;
  /* To copy any Text */
  copyText() {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    if (this.isDeploymentMachineEC2) {
      this.val = this.deploymentMachineCommand + ' "' + this.finalCommand + '"';
    } else {
      this.val = this.finalCommand;
    }
    selBox.value = this.val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }

  generateCommand() {
    this.command.setReource(this.resource);
    this.command.setReourceSubType(this.resourceSubType);
    this.command.setInstance(
      this.command.getENVIRONEMNT() === "nonprod" ? "test" : "ignore"
    );
    this.command.setIsProduction(
      this.command.getENVIRONEMNT() === "nonprod" ? "false" : "true"
    );
    if (this.command.isNewSplitterDeployed() === "false") {
      this.command.setSplitterStackName("ignore");
    } else if (
      this.command.getSplitterStackName() === "" ||
      this.command.getSplitterStackName() === "ignore"
    ) {
      this.command.setSplitterStackName(null);
    }
    if (this.command.getDeploymentMachine() === "EC2") {
      if (this.command.getDeploymentOption() === "Deploy Component") {
        this.validateAndGenerateCommand(this.ec2ComponentArgs);
      } else if (this.command.getDeploymentOption() === "Run Pipeline") {
        this.command.setReourceSubType("all");
        this.command.setReource("all");
        this.validateAndGenerateCommand(this.ec2PipelineArgs);
      } else if (this.command.getDeploymentOption() === "snticket") {
        this.validateAndGenerateCommand(this.ec2ChangeRequestArgs);
      }
    } else if (this.command.getDeploymentMachine() === "gitlab") {
      if (this.command.getDeploymentOption() === "Deploy Component") {
        this.validateAndGenerateCommand(this.gitlabComponentArgs);
      } else if (this.command.getDeploymentOption() === "Run Pipeline") {
        this.command.setReourceSubType("all");
        this.command.setReource("all");
        this.validateAndGenerateCommand(this.gitlabPipelineArgs);
      } else if (this.command.getDeploymentOption() === "snticket") {
        this.validateAndGenerateCommand(this.gitlabChangeRequestArgs);
      }
    }
    if (this.command.getDeploymentOption() === "Deploy Component") {
      this.deploymentMachineCommand = "./create_environment.sh";
    } else if (this.command.getDeploymentOption() === "Run Pipeline") {
      this.deploymentMachineCommand = "./run-deployment-pipeline.sh";
    } else if (this.command.getDeploymentOption() === "snticket") {
      this.deploymentMachineCommand = "./create-change-request.sh";
    }
    if (this.isFormValid) {
      this.hideCommandDisplay = false;
    } else {
      this.hideCommandDisplay = true;
    }
  }

  private validateAndGenerateCommand(args: any) {
    this.isFormValid =
      Object.keys(args)
        .filter(type => isNaN(type as any) && type !== "values")
        .filter(
          key =>
            !this.command[key] ||
            this.command[key].includes(",") ||
            this.command[key].includes('"') ||
            this.command[key].includes("'")
        ).length === 0;
    this.invalidFields = Object.keys(args)
      .filter(type => isNaN(type as any) && type !== "values")
      .map(key =>
        !this.command[key] ||
        this.command[key].includes(",") ||
        this.command[key].includes('"') ||
        this.command[key].includes("'")
          ? key
          : null
      )
      .filter(key => key !== null)
      .map(key => "<li>" + key + "</li>")
      .join("");
    this.finalCommand = Object.keys(args)
      .filter(type => isNaN(type as any) && type !== "values")
      .map(key =>
        !this.command[key] ||
        this.command[key] === "ignore" ||
        this.command[key].includes(",") ||
        this.command[key].includes('"') ||
        this.command[key].includes("'")
          ? null
          : key + "=" + this.command[key]
      )
      .filter(key => key !== null)
      .join(",");
  }
}
