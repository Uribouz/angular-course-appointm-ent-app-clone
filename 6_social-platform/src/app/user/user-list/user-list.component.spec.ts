import { UserService } from './../user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService)
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([ 
      {id: 1, name: "John Doe"},
      {id: 2, name: "Maria Doe"}
    ]))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieved users from the UserService on init', () => {
    expect(userServiceSpy).toHaveBeenCalled();
  })

  it('should retrieve users from the UserService when the refresh button is clicked', () => {
    userServiceSpy.calls.reset();
    const button = fixture.debugElement.query(By.css("button"));
    button.triggerEventHandler('click', null);
    expect(userServiceSpy).toHaveBeenCalled();
  })
});
