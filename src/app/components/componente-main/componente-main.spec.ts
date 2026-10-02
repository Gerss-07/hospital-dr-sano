import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteMain } from './componente-main';

describe('ComponenteMain', () => {
  let component: ComponenteMain;
  let fixture: ComponentFixture<ComponenteMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteMain],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
