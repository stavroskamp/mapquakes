import React from 'react';
import Color from "color";
import styled from "styled-components";
import { Button as BootstrapButton } from 'reactstrap';

const mainColor = Color('rebeccapurple');

const StyledButton = styled(BootstrapButton)`
    background-color: ${mainColor.hex()}!important;
    border-color: ${mainColor.hex()}!important;
    color: #FFFF;
    &:hover {
        background-color: ${mainColor.darken(0.15).hex()}!important;
    }
    &:focus {
        box-shadow: 0 0 0 0.2rem ${mainColor.lighten(0.75).hex()}!important;
    }
    &:active {
        background-color: ${mainColor.darken(0.20).hex()}!important;
    }
`;

const Button = () => {
    return (
        <StyledButton>The Custom Button</StyledButton>
    )
};

export default Button;