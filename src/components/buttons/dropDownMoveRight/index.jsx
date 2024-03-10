import React from 'react';
import CloseIcon from 'images/svg/close.svg';
import { BtnBox, BtnRight, Icon } from "./DropDownMoveRight.styled";

const DropDownMoveRight = ({ handleCloseModal }) => {
    const handleClick = () => {
        handleCloseModal();
    };

    return (
        <BtnBox>
            <li>
                <BtnRight onClick={handleClick}>
                    <Icon src={CloseIcon} alt="Close" />
                </BtnRight>
            </li>
        </BtnBox>
    );
};

export default DropDownMoveRight;
