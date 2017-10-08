import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

//mocks ***************************************************************************************************************
@Component({
  selector: 'phone-list-container',
  template: '<p></p>'
})
export class PhoneListContainerComponent {
  constructor() { }
}

@Component({
  selector: 'spinner',
  template: '<p></p>'
})
export class SpinnerComponent{
  constructor() { }
}
//tests ***************************************************************************************************************



describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, PhoneListContainerComponent,SpinnerComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', async(() => {

    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  }));

  describe('DOM Testing', () => {
    it('check title', async(() => {


      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Frontend Challenge');
    }));

    it('check page-wrap container', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector(".page-wrap")).toBeTruthy();
    }));

    describe('left menu', () => {
      it('check menu', async(() => {

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("#nav")).toBeTruthy();
      }));
    });

    describe('central section', () => {
      it('check central section', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("#main")).toBeTruthy();
      }));

      it('check banner', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("#banner")).toBeTruthy();
      }));

      it('check galleries (call to component phone-list-container)', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("phone-list-container")).toBeTruthy();
      }));

      it('check contact', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("#contact")).toBeTruthy();
      }));
    });

    describe('footer menu', () => {
      it('check footer', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector("#footer")).toBeTruthy();
      }));
    });

    it('check spinner (call to component phone-list-container)', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("spinner")).toBeTruthy();
    }));
  });
});
