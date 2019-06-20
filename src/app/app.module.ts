//import { PostsService } from "./posts/posts.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { CalcComponent } from "./calc/calc.component";
import { AddButtonComponent } from "./add-button/add-button.component";

@NgModule({
  declarations: [AppComponent, CalcComponent, AddButtonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
