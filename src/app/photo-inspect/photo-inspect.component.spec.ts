import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoInspectComponent } from './photo-inspect.component';

describe('PhotoInspectComponent', () => {
  let component: PhotoInspectComponent;
  let fixture: ComponentFixture<PhotoInspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoInspectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
