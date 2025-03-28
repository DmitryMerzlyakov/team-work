import { Route, Routes } from 'react-router-dom';
import { links } from '../config';
import ErrorPage from '../../components/pages/errorPage';
import MainPage from '../../components/pages/mainPage';
import { MainLayout } from '../../components/layouts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path={links.error} element={<ErrorPage />} />
    </Routes>
  );
};
