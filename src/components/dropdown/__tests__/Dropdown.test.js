import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Dropdown from '../Dropdown';
import sinon from 'sinon';
import {
  example1,
  example2
} from '../__mock__';

describe('Dropdown', () => {

  it('Simple dropdown - should render and not crash', () => {
    const wrapper = shallow(<Dropdown
      id="test1"
      options={example1}
      buttonType="label"
      onSelectChange={(data) => {
        console.log(data);
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('Simple dropdown - should render and not crash', () => {
  //   const tree = renderer
  //     .create(<Dropdown
  //       id="test1"
  //       options={example1}
  //       buttonType="label"
  //       onSelectChange={(data) => {
  //         console.log(data);
  //       }}
  //     />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  xit('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Dropdown
      id="test1"
      options={example1}
      buttonType="label"
      onSelectChange={(data) => {
        onButtonClick();
      }}
    />);
    wrapper.find('button').toHaveLength(1);
    // wrapper.find('button').simulate('click');
    // wrapper.find('li').first().simulate('click');
    // expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('Simple dropdown - lineHeight - should render and not crash', () => {
    const wrapper = shallow(<Dropdown
      label="testing..."
      lineHeight={'150px'}
      options={example1}
      selected={example1[3].value}
      buttonType="label"
      onSelectChange={(data) => {
        console.log(data);
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Simple dropdown - icon - should render and not crash', () => {
    const wrapper = shallow(<Dropdown
      options={example1}
      selected={example1[3].value}
      buttonType="icon"
      onSelectChange={(data) => {
        console.log(data);
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Simple dropdown with search -- should render and not crash', () => {
    const wrapper = shallow(<Dropdown
      searchEnabled
      options={example1}
      selected={example1[3].value}
      onSelectChange={(data) => {
        console.log(data);
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Simple dropdown multi-select - should render and not crash', () => {
    const wrapper = shallow(<Dropdown
      options={example1}
      multiSelected
      selected={[example1[3].value]}
      onSelectChange={(data) => {
        console.log(data);
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Group dropdown - should render and not crash', () => {
    const wrapper = shallow(<Dropdown
      options={example2}
      selected={example2[0].value}
      onSelectChange={(data) => {
        console.log(data);
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

});
