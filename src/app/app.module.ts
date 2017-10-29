import { TreeService } from './service/tree.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ButtonModule, DialogModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeAddNodeComponent } from './tree-add-node/tree-add-node.component';
import { TreeEditNodeComponent } from './tree-edit-node/tree-edit-node.component';
import { TreeRemoveNodeComponent } from './tree-remove-node/tree-remove-node.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TreeAddNodeComponent,
    TreeEditNodeComponent,
    TreeRemoveNodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DialogModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
