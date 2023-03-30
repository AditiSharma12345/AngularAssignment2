import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddProductComponent } from './quick-add-product.component';

describe('QuickAddProductComponent', () => {
  let component: QuickAddProductComponent;
  let fixture: ComponentFixture<QuickAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickAddProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
