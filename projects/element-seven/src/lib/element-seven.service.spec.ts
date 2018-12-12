import { TestBed } from '@angular/core/testing';

import { ElementSevenService } from './element-seven.service';

describe('ElementSevenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementSevenService = TestBed.get(ElementSevenService);
    expect(service).toBeTruthy();
  });
});
