import React from 'react';
import styled from 'styled-components';

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const RadioLabel = styled.label`
  position: relative;
  padding-left: 2.5rem;
  cursor: pointer;
  font-size: 1rem;
  user-select: none;
  color: #484848;
  font-weight: 400;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 50%;
  }

  input:checked ~ span {
    background-color: #fff;
    border: 1px solid #dcdcdc;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    top: 0.45rem;
    left: 0.45rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background: #7d7dff;
  }
`;

const CustomRadioButton = ({ label, ...props }) => (
  <RadioButtonWrapper>
    <RadioLabel>
      {label}
      <input type="radio" {...props} />
      <span />
    </RadioLabel>
  </RadioButtonWrapper>
);

export default CustomRadioButton;
