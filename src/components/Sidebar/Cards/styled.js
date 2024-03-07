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
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.32px;
  height: 61px;
  background-color: #1f1f1f;
  margin-bottom: 4px;
  margin-right: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardsBoardListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 24px 20px 24px;
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
`;

export const CardsBoardListDeleteBtn = styled.button`
  background: transparent;
  border: none;
`;

export const CardsBoardListBtnDelete = styled(AppTrashCardSvg)`
  width: 16px;
  height: 16px;
`;

export const CardsBoardListLine = styled.div`
  width: 4px;
  border-radius: 4px 0 0 4px;
  background-color: #bedbb0;
`;
