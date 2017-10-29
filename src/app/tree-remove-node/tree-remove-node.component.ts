import { TreeService } from '../service/tree.service';
import { NodeModel } from '../model/node-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'remove-node',
  templateUrl: './tree-remove-node.component.html',
  styleUrls: ['./tree-remove-node.component.css']
})
export class TreeRemoveNodeComponent implements OnInit {

  @Input()
  node: NodeModel;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
  }

  public onRemoveNode() {
    this.treeService.removeNode(this.node);
  }

}
