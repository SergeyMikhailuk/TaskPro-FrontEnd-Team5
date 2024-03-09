import styled from 'styled-components';

export const BtnBox = styled.ul`
  min-width: 99px;
  position: absolute;
  right: -82px;
  top: 0px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const BtnRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none; /* Удаляем рамку */

  &:hover,
  &:focus {
    ${Icon} {
      stroke: var(--color-green);
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;