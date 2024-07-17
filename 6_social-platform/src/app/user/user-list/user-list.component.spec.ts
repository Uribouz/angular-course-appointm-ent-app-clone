import { UserService } from './../user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';

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
    // fixture.detectChanges();
    userService = TestBed.inject(UserService)
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([ 
      {id: 1, name: "John Doe"},
      {id: 2, name: "Maria Doe"}
    ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
