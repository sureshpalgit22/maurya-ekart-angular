import { TestBed } from '@angular/core/testing';

import { UrlConstant } from './url-constant.service';

describe('UrlConstantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlConstant = TestBed.get(UrlConstant);
    expect(service).toBeTruthy();
  });
});
