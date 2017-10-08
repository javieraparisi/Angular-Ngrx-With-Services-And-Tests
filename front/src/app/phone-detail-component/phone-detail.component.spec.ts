import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhoneDetailComponent } from './phone-detail.component';
import { MdDialogModule, MdDialog } from '@angular/material';


describe('PhoneDetailComponentComponent', () => {
  let component: PhoneDetailComponent;
  let fixture: ComponentFixture<PhoneDetailComponent>;
  let dialogInstance:MdDialog;
  let spyDialog: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailComponent ],
      imports:[MdDialogModule],
      providers:[MdDialog]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponent);
    component = fixture.componentInstance;
    dialogInstance = fixture.debugElement.injector.get(MdDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when open popup call dialog', () => {
    spyDialog = spyOn(dialogInstance, 'open');
    component.openDialog();
    expect(spyDialog.calls.any()).toBeTruthy();
  });
});
