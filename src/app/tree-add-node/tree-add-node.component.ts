import { TreeService } from '../service/tree.service';

import { NodeModel } from '../model/node-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-node',
  templateUrl: './tree-add-node.component.html',
  styleUrls: ['./tree-add-node.component.css']
})
export class TreeAddNodeComponent implements OnInit {

  @Input()
  public display: boolean;

  @Output()
  public onAdd: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter();

  @Input()
  node: NodeModel;

  nodeHeader: string;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
  }

  onAddClick() {
    this.onAdd.emit(true);
  }

  onCloseClick() {
    this.nodeHeader = null;
    this.onClose.emit(false);
  }

  onSaveNodeClick() {
    this.treeService.addNode(this.node, this.nodeHeader);
    this.onCloseClick();
  }
}
