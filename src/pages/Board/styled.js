import styled from 'styled-components';
// import { ReactComponent as TestSVG } from 'images/logo-violet.svg';

import { colors } from 'constants/colors';

export const Title = styled.h1`
  color: ${colors.green};
  font-size: 50px;
`;
export const Wrapper = styled.div``;

export const ColumnName = styled.ul`
  width: 334px;
  height: 56px;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  margin-left: 24px;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.02em;
  line-height: 21px;
  color: #ffffff;
`;
export const TitleWrapper = styled.div``;

export const TitleHeader = styled.h2`
  font-size: 14px;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const IconLink = styled.a``;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
`;
export const Use = styled.use``;

export const TaskCard = styled.div``;

export const Task = styled.div`
  width: 334px;
  height: 154px;
  background-color: #121212;
  padding-left: 20px;
  margin-left: 24px;
  margin-top: 20px;
  border-radius: 8px;
  border-left: 5px solid #8fa1d0;
  color: #ffffff;
  position: relative;
  h2 {
    padding-top: 14px;
  }
`;
export const Description = styled.p`
  width: 290px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  opacity: 50%;
  padding-top: 8px;

  &::after {
    content: '';
    position: absolute;
    width: 290px;
    height: 1px;
    top: 50%;
    left: 21px;
    border: 1px solid #ffffff;
    opacity: 10%;
    margin-top: 12px;
  }
`;

export const TaskOPtions = styled.ul`
  display: flex;
  width: 35px;

  gap: 14px;
  margin-top: 30px;
  li {
  }
`;

export const Priority = styled.h3`
  display: block;
  font-size: 8px;
  font-weight: 400;
  color: #ffffff;
  opacity: 50%;
  padding-bottom: 5px;
`;

export const PriorityColor = styled.div`
  width: 12px;
  height: 12px;
  background-color: #8fa1d0;
  border-radius: 50%;
`;
export const PriorityInfo = styled.p`
  font-size: 10px;
`;

export const PriorityWrapper = styled.div`
  font-size: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
`;
