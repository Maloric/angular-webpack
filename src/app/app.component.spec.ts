import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent],
      providers: []
    });
  });

  it('should not blow up', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

});
