import { TestBed } from '@angular/core/testing';

import { Resolver } from './resolver.service';

describe('ResolverService', () => {
  let service: Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Resolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
