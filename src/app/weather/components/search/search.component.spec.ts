import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [    
        ReactiveFormsModule,
        FormsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger search event when search button is clicked', async () => {
    
    spyOn(component.citySearch, 'emit');

    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'london';    
    input.dispatchEvent(new Event('input'));

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();  

    expect(component.citySearch.emit).toHaveBeenCalledWith('london');    
  });

});
