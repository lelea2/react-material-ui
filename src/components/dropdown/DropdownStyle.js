import styled, { css } from 'styled-components';

const dropdownStyle = {
  color: '#191919',
  width: '100%',
  fontSize: '16px',
  fontWeight: '300',
  textAlign: 'left',
  lineHeight: '1.4',
  display: 'block',
  borderRadius: '0 0 2px 2px',
  borders: '1px solid rgba(0,0,0,0.2)'
};

const dropdownBtnStyle = {
  color: '#191919',
  width: '100%',
  fontSize: '16px',
  fontWeight: '300',
  textAlign: 'left',
  lineHeight: '1.4',
  display: 'block',
  borderRadius: '2px',
  borderColor: 'rgba(0,0,0,0.2)',
  borders: '1px solid rgba(0,0,0,0.2)'
};

const DropdownDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: calc(100% - 15px) auto;
`;

const DropdownText = styled.div`
  display: inline-block;
  overflow: hidden;
  text-align: left;
  vertical-align: middle;
  padding: 5px 8px;
`;

const DropdownCaret = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-top: 14px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 7px solid #444;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }
  &:after {
    content: '';
    position: absolute;
    left: 1px;
    top: 0;
    border-top: 6px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
`;

const DropdownHeaderDiv = styled.div`
  display: block;
  padding: 3px 20px;
  font-size: 14px;
  line-height: 1.618;
  color: #999;
  white-space: nowrap;
`;

const DropdownHeaderSpan = styled.span`
  font-size: 14px;
  line-height: 1.618;
  color: #999;
  white-space: nowrap;
`;

const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: '1035',
  float: 'left',
  width: '100%',
  minWidth: '160px',
  margin: '2px 0 0', // override default ul
  listStyle: 'none',
  fontSize: '16px',
  textAlign: 'left', // Ensures proper alignment if parent has it changed (e.g., modal footer)
  backgroundColor: '#fff',
  borders: '1px solid rgba(0,0,0,.15)',
  borderRadius: '2px',
  backgroundClip: 'padding-box',
};

const dropdownDividerStyle = {
  borderTop: '1px solid #ededed'
};

const DropdownMenuContainer = styled.div`
  max-height: 200px;
  overflow: auto;
`;

// Can't do html escape for now since styled-components does not seem to support yet
// https://github.com/styled-components/styled-components/issues/1285
const ItemDiv = styled.a`
  cursor: pointer !important;
  padding: 12px 16px 16px 16px;
  color: #666 !important;
  display: block;
  position: relative;
  width: 100%;
  &.active {
    text-decoration: none;
    background-color: #F5F5F5;
    &:after {
      content: "✔";
      position: absolute;
      right: 8px;
      top: 50%;
      pointer-events: none;
      color: #3FC478;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      -o-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
  }
  &.disabled {
    color: #999 !important;
    background-color: transparent;
    cursor: not-allow !important;
  }
`;

const StyleWrapperDiv = styled.div`
  .dropdown-item {
    padding: 0;
    background: transparent !important;
  }
`;

const InputCheckBox = styled.input `
  float: right;
`;

const DropdownDivider = styled.hr`
  border: 1px solid #ededed;
`;

const DropdownPopup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  color: #212529;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,0.15);
  display: block;
  width: 100%;
  font-size: 16px;
  text-align: left;
  border-radius: 2px;
`;

export {
  InputCheckBox,
  StyleWrapperDiv,
  ItemDiv,
  DropdownPopup,
  DropdownMenuContainer,
  DropdownDiv,
  DropdownText,
  DropdownCaret,
  DropdownHeaderDiv,
  DropdownHeaderSpan,
  DropdownDivider,
  dropdownDividerStyle,
  dropdownStyle,
  dropdownMenuStyle,
  dropdownBtnStyle
};
