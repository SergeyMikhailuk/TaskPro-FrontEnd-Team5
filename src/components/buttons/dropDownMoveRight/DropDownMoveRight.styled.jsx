import styled from 'styled-components';

export const BtnBox = styled.ul`
  border-radius: 8px;
  background: var(--color-cream);
  box-shadow: 0px 4px 16px 0px var(--color-dark-gray);
  padding: 18px;
  list-style-type: none;
  min-width: 99px;
  height: auto;
  position: absolute;
  left: 30%;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 28px;
  left: -28px;
`;

export const BtnRight = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  &:hover ${Icon}, &:focus ${Icon} {
    fill: var(--color-green);
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
