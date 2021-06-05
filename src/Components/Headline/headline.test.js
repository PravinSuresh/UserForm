import React from 'react';
import {shallow} from 'enzyme';
import {EnzymeAdapter} from 'enzyme-adapter-react-16';
import Headline from './index';
import { findTestByComponent } from './../../../Utils/index';

const setUp = (props={})=>{
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline component',()=>{
    
    describe('Have props',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header:"test",
                desc:"some text as description"
            };
            wrapper = setUp(props);
        });

        it('should render without any errors',()=>{
            const component = findTestByComponent(wrapper,"headline-component");
            expect(component.length).toBe(1);
        });

        it('should be a H1',()=>{
            const h1= findTestByComponent(wrapper,'header');
            expect(h1.length).toBe(1);
        });

        it('should render a description',()=>{
            const description = findTestByComponent(wrapper,'description');
            expect(description.length).toBe(1);
        });
        it('should not render Headline',()=>{
            const headline = findTestByComponent(wrapper,'headline-component');
            expect(headline.length).toBe(1);
        });
    });

    describe('Have no props',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp();
        });
        it('should not render Header',()=>{
            const h1 = findTestByComponent(wrapper,'header');
            expect(h1.length).toBe(0);
        });
        it('should not render Description',()=>{
            const desc = findTestByComponent(wrapper,'description');
            expect(desc.length).toBe(0);
        });
        it('should not render Headline',()=>{
            const headline = findTestByComponent(wrapper,'headline-component');
            expect(headline.length).toBe(0);
        });
    });
});