import styled from 'styled-components';
import { ReactComponent as TestSVG } from 'images/logo-violet.svg';

import { colors } from 'constants/colors';

export const Title = styled.h1`
  color: ${colors.green};
  font-size: 50px;
`;
export const TestIcon = styled(TestSVG)`
  width: 30px;
  height: 20px;
`;
