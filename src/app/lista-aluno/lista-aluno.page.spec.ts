import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlunoPage } from './lista-aluno.page';

describe('ListaAlunoPage', () => {
  let component: ListaAlunoPage;
  let fixture: ComponentFixture<ListaAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
