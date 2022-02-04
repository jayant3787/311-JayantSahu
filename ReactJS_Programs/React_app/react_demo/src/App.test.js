import App from './App';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ShallowRenderer();

test('two plus two is four', () =>{
  expect(2+2).toBe(4);
});

test("check app comes without any issues", () =>{
  renderer.render(<App />);
});