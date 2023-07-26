import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkItemComponent } from './artwork-item.component';

describe('ArtworkItemComponent', () => {
  let component: ArtworkItemComponent;
  let fixture: ComponentFixture<ArtworkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
