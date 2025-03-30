import { Route, Routes } from 'react-router-dom';
import { links } from '../config';
import ErrorPage from '../../components/pages/errorPage';
import MainPage from '../../components/pages/mainPage';
import { GameLayout, MainLayout } from '../../components/layouts';
import { GamePage } from '../../components/pages/gamePage';
import LoginPage from '../../components/pages/loginPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={links.main} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={links.login} element={<LoginPage />} />
      </Route>
      <Route path={links.game} element={<GameLayout />}>
        <Route index element={<GamePage />} />
      </Route>

      <Route path={links.error} element={<ErrorPage />} />
    </Routes>
  );
};
