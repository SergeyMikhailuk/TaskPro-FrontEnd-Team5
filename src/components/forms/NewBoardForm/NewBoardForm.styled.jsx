import styled from 'styled-components';
// import { Field } from 'formik';
// import { ErrorMessage } from 'formik';



export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%); 
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: ${props => props.theme.themePopup.background};
  color: ${props => props.theme.themePopup.textSecondary};
  border-radius: 8px;
  width: 350px;
  height: 433px;
  z-index: 1000; 
`;
export const ModalContent = styled.div`
  color: ${props => props.theme.themePopup.textMain};
  border-radius: 5px;
  box-shadow: 0 0 10px ${props => props.theme.themePopup.boxShadow};
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.theme.themePopup.icon};
`;

export const NewBoardText = styled.h2`
  font-style: medium;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-family: 'Poppins';
  margin: 0;
   color: ${props => props.theme.themePopup.textSecondary};
   margin-bottom: 24px;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border: 1px solid ${props => props.theme.themePopup.border};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;

  &:focus {
    border-color: ${props => props.theme.themePopup.boxShadow};
  }
`;

// export const ModalContent = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

export const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;

// const Formik = styled(Field)`
//   display: inline-block;
//   width: 100%;
//   padding: 18px 14px;
//   color: ${props => props.theme.themePopup.textAccent};
//   border: 1px solid
//   ${props => props.theme.themePopup.border};
//   border-radius: 8px;
//   &:placeholder-shown {
//   color: ${props => props.theme.themePopup.textSecondary};
//   font-size: 14px;
//   }
//   &:focus {
//     border-color: ${props => props.theme.themePopup.border};
//   }
// `;

// export const Error = styled(ErrorMessage)`
//   padding-left: 14px;
//   margin: 0;
//   color: var(--color-pastel);
//   font-size: 12px;
//   font-family: Poppins;
//   font-weight: 500;
//   letter-spacing: -0.36px;
// `;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-top: 24px;
  margin-bottom: 14px;
`;

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 8px;
  margin-bottom:24px;
`;

export const Icon = styled.svg`
  height: 18px;
  width: 18px;
  stroke: ${props => props.theme.themePopup.boxShadow};
`;

export const TextOne = styled.p`
  font-family: 'Poppins';
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-top: 24px;
  margin-bottom: 14px;
`;


// const BgList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   margin-bottom: 16px;
//   max-width: 256px;
// `;

// const Img = styled.img`
//   border-radius: 6px;
// `;

// const BgColor = styled.li`
//   display: inline-block;
//   padding: 0px;
//   height: 28px;
//   width: 28px;
//   margin: 2px;
//   border-radius: 6px;
//   border: none;
//   cursor: pointer;
// `;

// const RadioField = styled(Field)`
//   appearance: none;
//   position: absolute;

//   &:checked + ${Icon} {
//     stroke: ${props => props.theme.themePopup.boxShadow};
//   }
// `;

// const RadioFieldBg = styled.input`
//   appearance: none;
//   position: absolute;
//   &:checked + ${Img} {
//     transform: scale(0.95);
//   }
// `;

// const CloseButton = styled.div`
//   position: absolute;
//   top: 14px;
//   right: 14px;
// `;

export const ButtonModal = styled.button`
  background: ${props => props.theme.themePopup.backgroundBell};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.themePopup.border};
  border-radius: 8px;
  position: absolute;
  bottom: 24px;
  min-width: 302px;
  height: 49px; 
`;
