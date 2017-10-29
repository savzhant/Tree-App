import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeEditNodeComponent } from './tree-edit-node.component';

describe('TreeEditNodeComponent', () => {
  let component: TreeEditNodeComponent;
  let fixture: ComponentFixture<TreeEditNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeEditNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeEditNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
