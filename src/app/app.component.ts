import { NodeModel } from './model/node-model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  node: NodeModel = {
    parent: null,
    header: 'Root',
    children: []
  };
}
