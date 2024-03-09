import styled from 'styled-components';
import { ReactComponent as AppEditCardSvg } from 'images/sidebar/edit-card.svg';
import { ReactComponent as AppIconCardSvg } from 'images/sidebar/icon-card.svg';
import { ReactComponent as AppTrashCardSvg } from 'images/sidebar/trash-card.svg';

export const CardsBoardListTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const CardsBoardListIcon = styled(AppIconCardSvg)`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;

export const CardsBoardList = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.sidebar.textSecondary};
  letter-spacing: -0.32px;
  height: 61px;
  margin-bottom: 4px;
  margin-right: 4px;

  &:hover {
    background-color: ${props => props.theme.sidebar.projectHover};
  }

  :hover::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 4px;
    top: 0;
    right: 0px;
    background-color: ${props => props.theme.sidebar.projectBorder};
    border-radius: 4px 0px 0px 4px;
    opacity: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardsBoardListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 24px 20px 24px;

  &:hover {
    color: ${props => props.theme.needHelp.icon};
    svg {
      color: ${props => props.theme.needHelp.icon};
    }
  }
`;

export const CardsBoardListBtnGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const CardsBoardListEditBtn = styled.button`
  background: transparent;
  border: none;
  margin-right: 8px;
`;

export const CardsBoardListBtnEdit = styled(AppEditCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.sidebar.addButtonBackground};
`;

export const CardsBoardListDeleteBtn = styled.button`
  background: transparent;
  border: none;
`;

export const CardsBoardListBtnDelete = styled(AppTrashCardSvg)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.sidebar.addButtonBackground};
`;
