import { NodeModel } from '../model/node-model';

import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {
  
  constructor() {}

  public addNode(parentNode: NodeModel, nodeHeader: string) {
    if (nodeHeader == null || undefined)
      nodeHeader = 'NewNode';
    var newNode: NodeModel = {
      parent: parentNode,
      header: nodeHeader,
      children: []
    }
    parentNode.children.push(newNode);
  }

  public editNode(currentNode: NodeModel, nodeHeader: string) {
    if (nodeHeader == null || undefined)
      nodeHeader = 'NewNode';
    currentNode.header = nodeHeader;
  }

  public removeNode(currentNode: NodeModel) {
    if (currentNode.parent) {
      var index = currentNode.parent.children.indexOf(currentNode); 
      currentNode.parent.children.splice(index, 1);
    }
    else {
      //TODO: remove root node
      currentNode.children = [];
      currentNode.header = null;
    }
  }
}
