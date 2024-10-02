import React from "react";
import renderer from 'react-test-renderer'
import 'react-native';
import ClassComponentsForTestCase from "../components/classComponents/classConstFunction";


test('Function Testing', () => {
    const instance = renderer.create(<ClassComponentsForTestCase />).getInstance();
    const input = instance.getData(5);
    console.log(input);
    expect(instance.getData(5)).toEqual(15);
})

test('Function Test State ', () => {
    const instance = renderer.create(<ClassComponentsForTestCase />).getInstance();
    instance.getData(5);
    expect(instance.state.value).toEqual(5);
})