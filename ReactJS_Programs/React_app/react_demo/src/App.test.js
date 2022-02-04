import App from './App';
import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow'
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ScoreBoard from "./components/scoreboard/ScoreBoard";
import HelloWorld from './PureComp-demo';
import toJson from 'enzyme-to-json';
import Player from './components/Player';
// import sinon from 'sinon';
import MyEvent from './components/event-handling-demo/MyEvent';


configure({ adapter: new Adapter() });


// const renderer = new ShallowRenderer();

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

// doing the grouping putting 2 test cases into 1
describe('basic app rendering test cases', () => {
  test("check app comes without any issues", () => {
    shallow(<App />);
  });

  test("app renders the text inside it", () => {
    const wrapper = mount(<App />);
  });
});


test('shallow app rendering should not display child content', () => {
  var wrapper = shallow(<App />);
  const someContent = "CHANGE THE HOBBY";
  expect(wrapper.contains(someContent)).toEqual(false);
});



describe('HTML content rendering test suit', () => {
  test('app renders the HTML content inside it', () => {
    var wrapper = shallow(<App />);
    const someContent = <h4>Click here to Learn React</h4>;
    expect(wrapper.contains(someContent)).toEqual(true);
  });

  test('app render the HTML content inside it', () => {
    var wrapper = shallow(<App />);
    const someContent = <h4>Click here to Learn Reacter</h4>;
    expect(wrapper.contains(someContent)).toEqual(false);
  });

  test('app has a 2 h4 element', () => {
    var wrapper = shallow(<App />);
    // use CSS selector to find all h4 element
    const noOfh4Elements = wrapper.find('h4').length; // this will return an array
    expect(noOfh4Elements).toEqual(2);
  });

  test('app has a single ScoreBoard component', () => {
    var wrapper = mount(<App />);
    const isScoreBoard = wrapper.find('ScoreBoard').length;
    expect(isScoreBoard).toEqual(1); //OR
    // expect(isScoreBoard).to.have.lengthOf(1);
  });

  test('app has a single ScoreBoard component and has content....', () => {
    // var wrapper = mount(<App />);
    const wrapper1 = mount(<ScoreBoard />);
    expect((wrapper1.text()).indexOf("INDIA") !== -1).toEqual(true);//OR

    // the below way is also used
    // expect(wrapper1.contains("INDIA")).toEqual(true);

  });

  test('score board is same or not', () => {
    // var wrapper = mount(<App />);
    const tree = mount(<HelloWorld />);
    expect(toJson(tree)).toMatchSnapshot();

  });
});



describe('h2 element rendering test suit', () => {
  test('app renders find the element by id', () => {
    var wrapper = mount(<App />);
    const findH2 = wrapper.find('#myH2');
    expect(findH2.contains("HI")).toEqual(true);
  });

  test('app renders find the element by id and display its content', () => {
    var wrapper = mount(<App />);
    expect((wrapper.text()).indexOf("HI") !== -1).toEqual(true);
  });

  // i am passing the props hence keeping true to pass
  test('app renders props are passed or not', () => {
    var wrapper = mount(<Player name="jayu" />);
    expect(wrapper.contains("jayu")).toEqual(true);
  });

  //not passing the props hence keeping false to pass
  test('app renders props are passed', () => {
    var wrapper = mount(<Player />);
    expect(wrapper.contains("jayu")).toEqual(false);
  });
});


test('simulates submit events', () => {
  // const onButtonSubmit = sinon.spy();
  const wrapper = shallow(<MyEvent />);
  wrapper.find('#btn3').simulate('click');
  console.log("simulate test case"+wrapper.text());
  expect(wrapper.contains("25")).toEqual(true);
});




