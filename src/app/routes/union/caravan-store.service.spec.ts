import { TestBed } from '@angular/core/testing';

import { CaravanStoreService } from './caravan-store.service';

describe('CaravanStoreService', () => {
  let service: CaravanStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaravanStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
