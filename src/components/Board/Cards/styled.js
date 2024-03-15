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
  width: 334px;
  min-height: 154px;
  border-radius: 8px;
  background-color: ${props => props.theme.column.backgroundMain};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background-color: green;

    background-color: ${props =>
      props.priority === 'Without' && 'rgb(128, 128, 128)'};
    background-color: ${props =>
      props.priority === 'Low' && 'rgba(143, 161, 208, 1)'};
    background-color: ${props =>
      props.priority === 'Medium' && 'rgba(224, 156, 181, 1)'};
    background-color: ${props =>
      props.priority === 'High' && 'rgba(190, 219, 176, 1)'};
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
  width: 290px;
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

  background-color: green;

  background-color: ${props =>
    props.priority === 'Without' && 'rgb(128, 128, 128)'};
  background-color: ${props =>
    props.priority === 'Low' && 'rgba(143, 161, 208, 1)'};
  background-color: ${props =>
    props.priority === 'Medium' && 'rgba(224, 156, 181, 1)'};
  background-color: ${props =>
    props.priority === 'High' && 'rgba(190, 219, 176, 1)'};
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
  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
  }
`;

export const Pencil = styled(PencilSvg)`
  height: 16px;
  width: 16px;
  fill: transparent;
  color: ${props => props.theme.column.textSecondary};
  transition: all 150ms linear;
  cursor: pointer;
`;

export const ArrowCircle = styled(ArrowCircleSvg)`
  height: 16px;
  width: 16px;
  fill: transparent;
  color: ${props => props.theme.column.textSecondary};
  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
  }
`;

export const IconBellWrapper = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${props => props.theme.themePopup.backgroundBell};
  filter: ${props => props.theme.themePopup.filterBell};
`;

export const Bell = styled(BellSvg)`
  position: absolute;
  height: 16px;
  width: 16px;
  color: ${props => props.theme.themePopup.strokeBell};
  transition: all 150ms linear;
`;

export const MoverWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const PopupWrapper = styled.ul`
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-60%);
  min-width: 160px;
  padding: 18px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.themePopup.border};
  background: ${props => props.theme.themePopup.background};
  box-shadow: 0px 4px 16px 0px ${props => props.theme.themePopup.boxShadow};
  gap: 4px;
  z-index: 99;
  overflow-y: scroll;
  scroll-behavior: auto;
  max-height: 112px;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const PopupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: ${props => props.theme.themePopup.textSecondary};
  stroke: ${props => props.theme.themePopup.textSecondary};
  fill: transparent;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.themePopup.textAccent};
    stroke: ${props => props.theme.themePopup.textAccent};
  }
`;

export const PopupText = styled.p`
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: -0.28px;
`;
