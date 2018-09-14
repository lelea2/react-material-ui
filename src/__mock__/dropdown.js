const example1 = [
  {
    name: 'Option 1',
    title: 'Custom title',
    value: 1
  },
  {
    disabled: true,
    name: 'Option 2',
    value: 2
  },
  {
    name: 'Option 3',
    value: 3
  },
  {
    name: 'Option 4',
    value: 4
  },
  {
    name: 'Option 5',
    value: 5
  },
  {
    name: 'Option 6',
    value: 6
  },
  {
    name: 'Option 7',
    value: 7
  }
];

const example2 = [
  {
    name: 'Option outside optgroup',
    value: 98
  },
  {
    name: 'Option outside optgroup 2',
    value: 99
  },
  {
    label: 'Group1',
    options: [
      {
        name: 'Option 1',
        value: 1
      },
      {
        disabled: true,
        name: 'Option 2',
        value: 2
      },
      {
        name: 'Option 3',
        value: 3
      }
    ]
  },
  {
    label: 'Group2',
    options: [
      {
        name: 'Option 4',
        value: 4
      },
      {
        name: 'Option 5',
        value: 5
      }
    ]
  }
];

export {
  example1,
  example2
};
