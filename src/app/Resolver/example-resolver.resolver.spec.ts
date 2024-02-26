import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { exampleResolverResolver } from './example-resolver.resolver';

describe('exampleResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => exampleResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
