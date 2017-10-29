import { TreeService } from '../service/tree.service';
import { NodeModel } from '../model/node-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-node',
  templateUrl: './tree-edit-node.component.html',
  styleUrls: ['./tree-edit-node.component.css']
})
export class TreeEditNodeComponent implements OnInit {
  @Input()
  public display: boolean;

  @Output() 
  public onEdit: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public onClose: EventEmitter<boolean> = new EventEmitter();
  
  @Input()
  node: NodeModel;

  nodeHeader: string;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
  }

  onEditClick(){
    this.onEdit.emit(true);
  }

  onCloseClick(){
    this.nodeHeader = null; 
    this.onClose.emit(false);
  }

  onEditNodeClick(){
    this.treeService.editNode(this.node, this.nodeHeader);
    this.onCloseClick();
  }
}
