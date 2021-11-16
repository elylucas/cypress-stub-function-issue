/* eslint-disable import/first */
/// <reference types="cypress" />
import { mount } from '@cypress/react';
import * as SayHello from './sayHello';

import Hello from './Hello';

describe('Hello', () => {
  it('should say Whattup', () => {
    cy.stub(SayHello, 'sayHello').returns('Whattup');
    mount(<Hello />);
    cy.get('.my-div').should('have.text', 'Whattup');
  });
});
