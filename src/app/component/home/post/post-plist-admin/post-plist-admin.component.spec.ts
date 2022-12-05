import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlistAdminComponent } from './post-plist-admin.component';

describe('PostPlistAdminComponent', () => {
  let component: PostPlistAdminComponent;
  let fixture: ComponentFixture<PostPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
