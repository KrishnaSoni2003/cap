import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsCardsComponent } from './podcasts-cards.component';

describe('PodcastsCardsComponent', () => {
  let component: PodcastsCardsComponent;
  let fixture: ComponentFixture<PodcastsCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastsCardsComponent]
    });
    fixture = TestBed.createComponent(PodcastsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
