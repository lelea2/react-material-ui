import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import classNames from 'classnames';
import InputSearch from './InputSearch';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  InputCheckBox,
  ItemDiv,
  DropdownPopup,
  DropdownDiv,
  DropdownText,
  DropdownCaret,
  DropdownHeaderDiv,
  DropdownHeaderSpan,
  DropdownDivider,
  DropdownLabel
} from './DropdownStyle';

const StyledButton = styled(Button)`
  && {
    font-size: 16px;
    background: #fff;
    font-weight: 300;
    width: 100%;
    border-radius: 0;
    border: 1px solid #ededed;
    text-transform: none;
    padding: 6px 8px;
    &:hover {
      background: transparent;
    }
    &:focus,
    &:active {
      border: 1px solid #364BC4;
    }
  }
`;

const StyledContainer = styled.div`
  position: relative;
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    padding: 0;
    height: auto;
    &:focus,
    &:hover,
    &:active {
      background: #ededed !important;
    }
  }
`;

const StyledMenuList = styled(MenuList)`
  && {
    height: auto;
    max-height: ${props => props.listLength};
    overflow: auto;
  }
`;

class RSDropdown extends React.Component {
  state = {
    open: false,
    selected: '',
    filterOptions: [],
    flatOptions: []
  };

  componentDidMount() {
    const { selected, options } = this.props;
    this.setState({
      selected,
      flatOptions: this.getOptions(options),
      filterOptions: []
    });
  }

  getValue = () => {
    return this.state.selected;
  }

  // This is to create a flat options hierarchy for searching
  getOptions = (options) => {
    let arr = [];
    options.map((option) => {
      if (option.options) {
        arr = arr.concat(this.getOptions(option.options));
      } else {
        arr.push(option);
      }
    });
    return arr;
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  }

  validateSelected = (option) => {
    const { multiSelected } = this.props;
    const { selected } = this.state;
    if (multiSelected) {
      const idx = selected.indexOf(option.value);
      if (idx > -1) { // item selected, toggle it
        selected.splice(idx, 1);
      } else {
        selected.push(option.value);
      }
      return selected;
    } else {
      return option.value;
    }
  }

  handleSelect = (option) => {
    if (option.disabled) { // nothing triggered if item is disabled
      return;
    }
    const selected = this.validateSelected(option);
    this.setState({
      selected,
      open: false,
    });
    if (this.props.onSelectChange) {
      this.props.onSelectChange(option)
    }
  }

  isItemActive = (val) => {
    const { multiSelected } = this.props;
    const { selected } = this.state;
    if (multiSelected) {
      return selected.indexOf(val) > -1;
    } else {
      return val === selected;
    }
  }

  renderCheckBox = (disabled, active) => {
    return (!disabled && !active) && <InputCheckBox disabled={disabled} type="checkbox" />;
  }

  renderItem(option, key) {
    const { filterOptions } = this.state;
    const { multiSelected } = this.props;
    const { name, disabled, value } = option;
    const active = this.isItemActive(value);
    return (filterOptions.indexOf(value) < 0) && (
      <StyledMenuItem
        key={key}
        className={'dropdown-item'}
        disabled={disabled}
        active={active}
      >
        <ItemDiv
          className={classNames('', { disabled, active })}
          onClick={this.handleSelect.bind(this, option)}>
            {name}
            {multiSelected && this.renderCheckBox(disabled, active)}
        </ItemDiv>
      </StyledMenuItem>
    );
  }

  renderGroup(option, key) {
    const { label, options } = option;
    return (
      <div key={key}>
        <DropdownDivider />
        <DropdownHeaderDiv>
          <DropdownHeaderSpan>{label}</DropdownHeaderSpan>
        </DropdownHeaderDiv>
        {options.map((item, i) => {
          return this.renderItem(item, `${key}-item-${i}`);
        })}
      </div>
    );
  }

  renderDropdownList = (options) => {
    return options.map((option, i) => {
      return (option.options) ? this.renderGroup(option, `group-${i}`) : this.renderItem(option, `item-${i}`);
    });
  }

  getDisplayValue = (selected) => {
    const { flatOptions } = this.state;
    const { multiSelected } = this.props;
    const selectedItems = flatOptions.filter((item) => {
      return (multiSelected) ? (selected.indexOf(item.value) > -1) : (item.value === selected);
    });
    const data = selectedItems.map((item) => {
      return (item.display || item.name);
    });
    return data.map((val, i) => {
      return (
        <span key={i}>
          {val}{(i < data.length - 1) ? ', ' : ''}
        </span>
      );
    });
  }

  handleSearch = (e) => {
    const { flatOptions } = this.state;
    const searchText = e.target.value;
    if (!!searchText) {
      const filterOptions = flatOptions.map((item) => {
        const valStr = `${item.name}`;
        const idx = valStr.toLowerCase().search(searchText.toLowerCase());
        if (idx < 0) {
          return item.value;
        }
      });
      this.setState({ filterOptions });
    } else {
      this.setState({ filterOptions: [] })
    }
  }

  renderButton() {
    const { buttonType } = this.props;
    const { open, selected } = this.state;
    switch (buttonType) {
      // TODO: should think about extracting this out to be more flexible
      case 'icon':
        return (
          <IconButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-label="More"
            aria-owns={open ? 'menu-list-grow' : null}
            onClick={this.handleToggle}
          >
            <MoreVertIcon />
          </IconButton>
        );
      default:
        return (
          <StyledButton
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : null}
            onClick={this.handleToggle}
          >
            <DropdownDiv>
              <DropdownText>{this.getDisplayValue(selected)}</DropdownText>
              <DropdownCaret />
            </DropdownDiv>
          </StyledButton>
        );
    }
  }

  render() {
    const { options, searchEnabled, id, label, buttonType, listLength } = this.props;
    const { open, selected } = this.state;

    return (
      <StyledContainer id={id}>
        {label && <DropdownLabel>{label}</DropdownLabel>}
        {this.renderButton()}
        <ClickAwayListener onClickAway={this.handleClose}>
          <Paper>
            {open && <DropdownPopup type={buttonType}>
              <StyledMenuList listLength={listLength}>
                {searchEnabled && <InputSearch handleOnChange={this.handleSearch} />}
                {this.renderDropdownList(options)}
              </StyledMenuList>
            </DropdownPopup>}
          </Paper>
        </ClickAwayListener>
      </StyledContainer>
    );
  }
}

RSDropdown.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  selected: PropTypes.any,
  buttonType: PropTypes.oneOf(['icon', 'label']),
  listLength: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.node.isRequired,
        display: PropTypes.node,
        value: PropTypes.any.isRequired,
        disabled: PropTypes.bool
      }),
      PropTypes.shape({
        label: PropTypes.node.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.node.isRequired,
            display: PropTypes.node,
            value: PropTypes.any.isRequired,
            disabled: PropTypes.bool
          })
        )
      })
    ])
  ).isRequired,
  searchEnabled: PropTypes.bool,
  onSelectChange: PropTypes.func,
  multiSelected: PropTypes.bool
};

RSDropdown.defaultProps = {
  label: null,
  listLength: '200px',
  buttonType: 'label',
  selected: 'Select...',
  options: [],
  multiSelected: false
};

export default RSDropdown;
