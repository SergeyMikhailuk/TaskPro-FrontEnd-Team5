import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

import { getTheme } from 'store/themeSlice';
// import { theme } from 'constants/theme';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

// background-color: ${props => props.theme.sidebar.projectActive};

import { ContentWrapper, LayoutWrapper } from './styled';
import { useSelector } from 'react-redux';

const CabinetLayout = () => {
  const themeName = useSelector(getTheme);
  console.log('themeName: ', themeName);
  return (
    // <ThemeProvider theme={theme}>
    <LayoutWrapper>
      <Sidebar />

      <ContentWrapper>
        <Header />

        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </ContentWrapper>
    </LayoutWrapper>
    // </ThemeProvider>
  );
};

export default CabinetLayout;
