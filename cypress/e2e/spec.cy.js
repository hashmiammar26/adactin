import { invalidlogin, performValidLogin } from '../support/functions';
import { anotherdescribe } from '../support/anotherdescribe';

describe('Adactin Hotel App Tests', () => {

  it('Invalid login', () => {
    invalidlogin();
    });

  it('Valid login', () => {
    performValidLogin();
  });
});

anotherdescribe();