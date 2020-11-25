import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCadComponent } from './lista-cad.component';

describe('ListaCadComponent', () => {
  let component: ListaCadComponent;
  let fixture: ComponentFixture<ListaCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
