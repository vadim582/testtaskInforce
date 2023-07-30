import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlsTableComponent } from './short-urls-table.component';

describe('ShortUrlsTableComponent', () => {
  let component: ShortUrlsTableComponent;
  let fixture: ComponentFixture<ShortUrlsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
