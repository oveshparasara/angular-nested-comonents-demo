import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashDealCollectionsListComponent } from './flash-deal-collections-list.component';

describe('FlashDealCollectionsListComponent', () => {
  let component: FlashDealCollectionsListComponent;
  let fixture: ComponentFixture<FlashDealCollectionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashDealCollectionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashDealCollectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
