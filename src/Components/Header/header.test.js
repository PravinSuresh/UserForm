import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { findTestByComponent } from './../../../Utils/index';

describe("Header component",()=>{

    let component;
    beforeEach(()=>{
        component = shallow(<Header />);
    });

    it("Header is displayed",()=>{
        const logoContainer = findTestByComponent(component,'header-component');
        expect(logoContainer.length).toBe(1);
    });

    it('Should render a logo',()=>{
        const logoText = component.find(`[data-test='logo-text']`);
        const logoContainer = component.find(`[data-test='logo-container']`);
        expect(logoText.length).toBe(1);
        expect(logoContainer.length).toBe(1);

    });
});