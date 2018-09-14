import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from '../src/components/dropdown';
import {
  example1,
  example2
} from '../src/__mock__/dropdown';

const stories = storiesOf('react-material-ui', module);

stories.add('Dropdown', () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '320px', margin: '20px' }}>
        <label>Simple dropdown</label>
        <Dropdown
          options={example1}
          selected={example1[3].value}
          onSelectChange={(data) => {
            console.log(data);
          }}
        />
        <br />
        <label>Simple dropdown with search enabled</label>
        <Dropdown
          searchEnabled
          options={example1}
          selected={example1[3].value}
          onSelectChange={(data) => {
            alert(data.value);
          }}
        />
        <label>Simple dropdown with multi-selected</label>
        <Dropdown
          multiSelected
          options={example1}
          selected={[example1[3].value]}
        />
        <br />
        <label>Dropdown with group</label>
        <Dropdown
          options={example2}
          selected={example2[0].value}
        />
        <br />
      </div>
      <div>
        <label>Dropdown with markup</label>
        <Dropdown
          options={[{
            name: <div>
              <p><b>Test1</b></p>
              <p>Testing...</p>
            </div>,
            display: 'Test1',
            value: 98
          }, {
            name: <div>
              <p><b>Test2</b></p>
              <p>Testing...</p>
            </div>,
            display: <span>Test2</span>,
            value: 99
          }]}
          selected={99}
        />
      </div>
    </div>
  );
});
