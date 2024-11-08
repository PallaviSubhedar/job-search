import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavJobsComponent } from './fav-jobs.component';

describe('FavJobsComponent', () => {
  let component: FavJobsComponent;
  let fixture: ComponentFixture<FavJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
