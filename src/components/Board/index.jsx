import {
  Title,
  ColumnName,
  Wrapper,
  TitleWrapper,
  TitleHeader,
  IconWrapper,
  IconBtn,
  Icon,
  TaskCard,
  Task,
  Description,
  TaskOptions,
  Priority,
  PriorityColor,
  PriorityInfo,
  PriorityWrapper,
  Deadline,
  Pencil,
  TrashBin,
  BtnContainer,
  BtnList,
  Btn,
  ArrowCircle,
  OptionWrapper,
  WrapWrap,
  Scroll,
} from './styled';

const BoardPage = () => {
  return (
    <>
      <Title>Board Page</Title>
      <Scroll>
        <Wrapper>
          <ColumnName>
            <li>
              <TitleWrapper>
                <TitleHeader>To Do</TitleHeader>
              </TitleWrapper>
            </li>
            <li>
              <IconWrapper>
                <IconBtn>
                  <Icon>
                    <Pencil></Pencil>
                  </Icon>
                </IconBtn>
                <IconBtn>
                  <Icon>
                    <TrashBin></TrashBin>
                  </Icon>
                </IconBtn>
              </IconWrapper>
            </li>
          </ColumnName>

          <TaskCard>
            <Task>
              <TitleHeader>The Watch Spot Design</TitleHeader>
              <Description>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's...
              </Description>
              <WrapWrap>
                <OptionWrapper>
                  <TaskOptions>
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
                  </TaskOptions>
                </OptionWrapper>
                <BtnContainer>
                  <BtnList>
                    <li>
                      <Btn>
                        <ArrowCircle></ArrowCircle>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <Pencil></Pencil>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <TrashBin></TrashBin>
                      </Btn>
                    </li>
                  </BtnList>
                </BtnContainer>
              </WrapWrap>
            </Task>
          </TaskCard>
          <TaskCard>
            <Task>
              <TitleHeader>The Watch Spot Design</TitleHeader>
              <Description>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's...
              </Description>
              <WrapWrap>
                <OptionWrapper>
                  <TaskOptions>
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
                  </TaskOptions>
                </OptionWrapper>
                <BtnContainer>
                  <BtnList>
                    <li>
                      <Btn>
                        <ArrowCircle></ArrowCircle>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <Pencil></Pencil>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <TrashBin></TrashBin>
                      </Btn>
                    </li>
                  </BtnList>
                </BtnContainer>
              </WrapWrap>
            </Task>
          </TaskCard>
          <TaskCard>
            <Task>
              <TitleHeader>The Watch Spot Design</TitleHeader>
              <Description>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's...
              </Description>
              <WrapWrap>
                <OptionWrapper>
                  <TaskOptions>
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
                  </TaskOptions>
                </OptionWrapper>
                <BtnContainer>
                  <BtnList>
                    <li>
                      <Btn>
                        <ArrowCircle></ArrowCircle>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <Pencil></Pencil>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <TrashBin></TrashBin>
                      </Btn>
                    </li>
                  </BtnList>
                </BtnContainer>
              </WrapWrap>
            </Task>
          </TaskCard>
          <TaskCard>
            <Task>
              <TitleHeader>The Watch Spot Design</TitleHeader>
              <Description>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's...
              </Description>
              <WrapWrap>
                <OptionWrapper>
                  <TaskOptions>
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
                  </TaskOptions>
                </OptionWrapper>
                <BtnContainer>
                  <BtnList>
                    <li>
                      <Btn>
                        <ArrowCircle></ArrowCircle>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <Pencil></Pencil>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <TrashBin></TrashBin>
                      </Btn>
                    </li>
                  </BtnList>
                </BtnContainer>
              </WrapWrap>
            </Task>
          </TaskCard>
          <TaskCard>
            <Task>
              <TitleHeader>The Watch Spot Design</TitleHeader>
              <Description>
                Create a visually stunning and eye-catching watch dial design
                that embodies our brand's...
              </Description>
              <WrapWrap>
                <OptionWrapper>
                  <TaskOptions>
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
                  </TaskOptions>
                </OptionWrapper>
                <BtnContainer>
                  <BtnList>
                    <li>
                      <Btn>
                        <ArrowCircle></ArrowCircle>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <Pencil></Pencil>
                      </Btn>
                    </li>
                    <li>
                      <Btn>
                        <TrashBin></TrashBin>
                      </Btn>
                    </li>
                  </BtnList>
                </BtnContainer>
              </WrapWrap>
            </Task>
          </TaskCard>
        </Wrapper>
      </Scroll>
    </>
  );
};

export default BoardPage;
