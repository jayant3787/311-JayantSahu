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

// doing the grouping putting 2 test cases into 1
describe('basic app rendering test cases', () => {
  
test("check app comes without any issues", () =>{
  shallow(<App />);
});

test("app renders the text inside it", () =>{
  const wrapper = mount(<App />);
});
});


test('shallow app rendering should not display child content',() =>{
  var wrapper = shallow(<App />);
  const someContent = "CHANGE THE HOBBY";
  expect(wrapper.contains(someContent)).toEqual(false);
});

describe('HTML content rendering test suit', () => {
  



test('app renders the HTML content inside it',() =>{
  var wrapper = shallow(<App />);
  const someContent = <h4>Click here to Learn React</h4>;
  expect(wrapper.contains(someContent)).toEqual(true);
});

test('app render the HTML content inside it',() =>{
  var wrapper = shallow(<App />);
  const someContent = <h4>Click here to Learn Reacter</h4>;
  expect(wrapper.contains(someContent)).toEqual(false);
});
});

test('app has a 2 h4 element',() =>{
  var wrapper = shallow(<App />);
  // use CSS selector to find all h4 element
  const noOfh4Elements = wrapper.find('h4').length; // this will return an array
  expect(noOfh4Elements).toEqual(2);
});
