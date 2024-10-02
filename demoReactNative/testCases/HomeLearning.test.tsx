import 'react-native';
import React from 'react';
import HomeLearning from '../rootFiles/HomeLearning';
import renderer from 'react-test-renderer';

test('Test render Snapshot', ()=> {
  const snapshot = renderer.crea
  // expect(snapshot.toMatchSnapshot());
  expect(snapshot).toMatchSnapshot();

})