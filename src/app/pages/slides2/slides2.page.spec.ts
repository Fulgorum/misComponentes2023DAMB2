import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Slides2Page } from './slides2.page';

describe('Slides2Page', () => {
  let component: Slides2Page;
  let fixture: ComponentFixture<Slides2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Slides2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
