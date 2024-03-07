import {
  Title,
  ColumnName,
  Wrapper,
  TitleWrapper,
  TitleHeader,
  IconWrapper,
  IconLink,
  Icon,
  Use,
  TaskCard,
  Task,
  Description,
  TaskOPtions,
  Priority,
  PriorityColor,
  PriorityInfo,
  PriorityWrapper,
  Deadline,
  TestIcon,
} from './styled';

const BoardPage = () => {
  return (
    <>
      <Title>Board Page</Title>
      <Wrapper>
        <ColumnName>
          <li>
            <TitleWrapper>
              <TitleHeader>To Do</TitleHeader>
            </TitleWrapper>
          </li>
          <li>
            <IconWrapper>
              <IconLink>
                <Icon>
                  <TestIcon id="icon-pencil"></TestIcon>
                </Icon>
              </IconLink>
              <IconLink>
                <Icon>
                  <Use href="images/sprite.svg#icon-trash"></Use>
                </Icon>
              </IconLink>
            </IconWrapper>
          </li>
        </ColumnName>

        <TaskCard>
          <Task>
            <TitleHeader>The Watch Spot Design</TitleHeader>
            <Description>
              Create a visually stunning and eye-catching watch dial design that
              embodies our brand's...
            </Description>
            <TaskOPtions>
              <li>
                <Priority>Priority</Priority>
                <PriorityWrapper>
                  <PriorityColor></PriorityColor>
                  <PriorityInfo>Low</PriorityInfo>
                </PriorityWrapper>
              </li>
              <li>
                <Deadline>
                  <Priority>Deadline</Priority>
                  <PriorityInfo>12/05/2023</PriorityInfo>
                </Deadline>
              </li>
            </TaskOPtions>
          </Task>
        </TaskCard>
      </Wrapper>
    </>
  );
};

export default BoardPage;
