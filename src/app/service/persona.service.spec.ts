import { TestBed } from '@angular/core/testing';

import { personaService } from './personaService';

describe('PersonaService', () => {
  let service: personaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(personaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
