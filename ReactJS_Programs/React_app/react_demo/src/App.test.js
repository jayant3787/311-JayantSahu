import App from './App';
import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow'
import { mount,shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


// const renderer = new ShallowRenderer();

test('two plus two is four', () =>{
  expect(2+2).toBe(4);
});

test("check app comes without any issues", () =>{
  shallow(<App />);
});

test('shallow app rendering should not display child content',() =>{
  var wrapper = shallow(<App />);
  const someContent = "CHANGE THE HOBBY";
  expect(wrapper.contains(someContent)).toEqual(false);
});

test('app renders the HTML content inside it',() =>{
  var wrapper = shallow(<App />);
  const someContent = <h4>Click here to Learn React</h4>;
  expect(wrapper.contains(someContent)).toEqual(true);
});

test('app renders the HTML content inside it',() =>{
  var wrapper = shallow(<App />);
  const someContent = <h4>Click here to Learn Reacter</h4>;
  expect(wrapper.contains(someContent)).toEqual(false);
});

