import styled from 'styled-components';

import { ReactComponent as BellSvg } from 'images/svg/bell.svg';
import { ReactComponent as ArrowCircleSvg } from 'images/svg/arrow-circle-broken-right.svg';
import { ReactComponent as PencilSvg } from 'images/svg/pencil.svg';
import { ReactComponent as TrashSvg } from 'images/svg/trash.svg';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 20px 14px 24px;
  width: 280px;
  min-height: 154px;
  border-radius: 8px;
  background-color: ${props => props.theme.column.backgroundMain};
  overflow: hidden;
  transition: all 250ms linear;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;

    background-color: ${({ $priority }) =>
      $priority === 'Without priority' && 'rgb(128, 128, 128)'};
    background-color: ${({ $priority }) =>
      $priority === 'Low' && 'rgba(143, 161, 208, 1)'};
    background-color: ${({ $priority }) =>
      $priority === 'Medium' && 'rgba(224, 156, 181, 1)'};
    background-color: ${({ $priority }) =>
      $priority === 'High' && 'rgba(190, 219, 176, 1)'};
  }
  @media screen and (min-width: 345px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 334px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Title = styled.h4`
  color: ${props => props.theme.column.textMain};
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Text = styled.p`
  display: flex;
  color: ${props => props.theme.column.textSecondary};
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.02em;
  height: 35px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 290px;
    height: 1px;
    background-color: ${props => props.theme.column.borderColor};
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: auto;
`;

export const SubTitle = styled.p`
  color: ${props => props.theme.column.textSecondary};
  font-weight: 400;
  font-size: 8px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  margin-bottom: 4px;
`;

export const SubText = styled.p`
  color: ${props => props.theme.column.textMain};
  font-weight: 400;
  font-size: 10px;
`;

export const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PriorityIndicator = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 4px;

  background-color: ${({ $priority }) =>
    $priority === 'Without priority' && 'rgb(128, 128, 128)'};
  background-color: ${({ $priority }) =>
    $priority === 'Low' && 'rgba(143, 161, 208, 1)'};
  background-color: ${({ $priority }) =>
    $priority === 'Medium' && 'rgba(224, 156, 181, 1)'};
  background-color: ${({ $priority }) =>
    $priority === 'High' && 'rgba(190, 219, 176, 1)'};
`;

export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 8px;
`;

export const Trash = styled(TrashSvg)`
  height: 16px;
  width: 16px;
  color: ${props => props.theme.column.textSecondary};
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.column.buttonBackground};
  }
`;

export const Pencil = styled(PencilSvg)`
  height: 16px;
  width: 16px;
  fill: transparent;
  color: ${props => props.theme.column.textSecondary};
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.column.buttonBackground};
  }
`;

export const ArrowCircle = styled(ArrowCircleSvg)`
  height: 16px;
  width: 16px;
  fill: transparent;
  color: ${props => props.theme.column.textSecondary};
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.2);
    color: ${props => props.theme.column.buttonBackground};
  }
`;

export const Bell = styled(BellSvg)`
  height: 16px;
  width: 16px;
  color: ${props => props.theme.column.textSecondary};
  transition: all 150ms linear;

  filter: ${({ $isActive }) =>
    $isActive
      ? 'drop-shadow(0 0 1px #00ff00) drop-shadow(0 0 1px #00ff00) drop-shadow(0 0 4px #00ff00) drop-shadow(0 0 8px #00ff00)'
      : 'none'};
`;

export const MoveCardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  padding: 18px;
  width: 130px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.column.plusBackground};
  z-index: 3;
  transform: translateY(-50%);

  &:hover,
  &:focus {
    border: ${props => props.theme.editProfileModal.inputBorder};
    opacity: 1;
    visibility: visible;
    height: auto;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    row-gap: 10px;
    font-size: 11px;
    color: ${props => props.theme.column.textSecondary};
    background-color: transparent;
    padding: 0;
    width: 100%;
    overflow: hidden;

    border: none;

    span {
      max-width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:hover,
    &:focus {
      color: ${props => props.theme.column.buttonBackground};
    }

    svg path {
      transition: all 250ms linear;
    }

    &:hover svg path,
    &:focus svg path {
      stroke: ${props => props.theme.column.buttonBackground};
    }
  }
`;
