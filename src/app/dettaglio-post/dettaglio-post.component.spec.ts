import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPostComponent } from './dettaglio-post.component';

describe('DettaglioPostComponent', () => {
  let component: DettaglioPostComponent;
  let fixture: ComponentFixture<DettaglioPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
