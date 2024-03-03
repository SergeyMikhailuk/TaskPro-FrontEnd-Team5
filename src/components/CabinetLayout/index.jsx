import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { getTheme } from 'store/themeSlice';
import { theme } from 'constants/theme';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { ContentWrapper, LayoutWrapper } from './styled';

const CabinetLayout = () => {
  const currentThemeName = useSelector(getTheme);
  const currentTheme = theme.find(theme => theme.name === currentThemeName);

  return (
    <ThemeProvider theme={currentTheme}>
      <LayoutWrapper>
        <Sidebar />

        <ContentWrapper>
          <Header />

          <Suspense fallback={<>Loading...</>}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default CabinetLayout;
