import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-calc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.css"]
})
export class CalcComponent {
  result = 0;
  inputArray = [];
  tcode: string;
  values = "";
  fxnResult: number = 0;
  functionsList: any[] = [
    {
      name: "Add",
      functName: "add",
      args: 2,
      icon: "far fa-plus-square"
    },
    {
      name: "Subtract",
      functName: "subtract",
      args: 2,
      icon: "fas fa-minus"
    },
    {
      name: "Foo",
      args: 3,
      functName: "multiply",
      icon: "fas fa-expand-arrows-alt"
    },
    {
      name: "doSomething",
      args: 1,
      functName: "square",
      icon: "fas fa-exclamation-circle"
    }
  ];

  expressionsList = [];

  getNumberArray(form: NgForm) {
    return Object.values(form.value)
      .slice(1)
      .map(Number);
  }

  add(form: NgForm) {
    this.result = this.getNumberArray(form).reduce((s, c) => s + c);
  }

  subtract(form: NgForm) {
    this.result = this.getNumberArray(form).reduce((s, c) => s - c);
  }

  multiply(form: NgForm) {
    this.result = this.getNumberArray(form).reduce((s, c) => s * c);
  }

  square(form: NgForm) {
    this.result = Math.pow(this.getNumberArray(form)[0], 2);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.result = 0;
      if (event.container.data.length == 0 || event.container.id != "exp") {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
    }
  }
}
