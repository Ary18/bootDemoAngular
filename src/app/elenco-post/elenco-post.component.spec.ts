import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoPostComponent } from './elenco-post.component';

describe('ElencoPostComponent', () => {
  let component: ElencoPostComponent;
  let fixture: ComponentFixture<ElencoPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
