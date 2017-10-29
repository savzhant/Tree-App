import { NodeModel } from '../model/node-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input()
  node: NodeModel;

  displayAddModal: boolean;
  displayEditModal: boolean;

  constructor() { }

  ngOnInit() {
  }

  private isLeaf(): boolean {
    return this.node.children.length === 0;
  }

  public onAddButtonClick(display: boolean) {
    this.displayAddModal = display;
  }

  public onEditButtonClick(display: boolean) {
    this.displayEditModal = display;
  }

  public onCloseModalClick(display: boolean) {
    this.displayAddModal = display;
    this.displayEditModal = display;
  }
}
