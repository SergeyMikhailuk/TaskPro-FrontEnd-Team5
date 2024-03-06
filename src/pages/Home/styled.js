import styled from 'styled-components';

import { colors } from 'constants/colors';
import { ReactComponent as TestIcon } from 'images/svg/hexagon.svg'

export const Title = styled.h1`
  color: ${colors.green};
  font-size: 50px;
`;
export const TestIconSvg = styled(TestIcon)`
// color: red;
// color: ${({ $color }) => $color}
color: ${props => props.theme.modal.icon};
`