import React from 'react';
import CloseIcon from 'images/svg/close.svg';
import { BtnBox, BtnRight, BtnTitle } from "./DropDownMoveRight.styled";

const DropDownMoveRight = ({ handleCloseModal }) => {
    const handleClick = () => {
        handleCloseModal();
    };

    return (
        <BtnBox>
            <li>
                <BtnRight>
                    <BtnTitle onClick={handleClick}>Close</BtnTitle>
                    <img src={CloseIcon} alt="Close" />
                </BtnRight>
            </li>
        </BtnBox>
    );
};

export default DropDownMoveRight;
