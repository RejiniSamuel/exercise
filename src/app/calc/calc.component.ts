import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { ConditionalExpr } from "@angular/compiler";

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
      functName: "Add",
      args: 3,
      icon: "far fa-plus-square",
      functCode: function(values) {
        return values.reduce((s, c) => s + c);
      }
    },
    {
      name: "Subtract",
      functName: "Subtract",
      args: 2,
      icon: "fas fa-minus",
      functCode: function(values) {
        return values.reduce((s, c) => s - c);
      }
    },
    {
      name: "Foo",
      args: 3,
      functName: "Multiply",
      icon: "fas fa-expand-arrows-alt",
      functCode: function(values) {
        return values.reduce((s, c) => s * c);
      }
    },
    {
      name: "doSomething",
      args: 1,
      functName: "Square",
      icon: "fas fa-exclamation-circle",
      functCode: function(values) {
        return values * values;
      }
    }
  ];

  expressionsList = [];

  getFunct(form: NgForm, fxnName: string) {
    delete form.value["result"];
    var newArray = this.expressionsList.filter(function(el) {
      return el.functName == fxnName;
    });

    this.result = newArray[0].functCode(Object.values(form.value).map(Number));
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
