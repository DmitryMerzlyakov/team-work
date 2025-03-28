import { useNavigate } from 'react-router-dom';
import { links } from '../../../app/config';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Страница не найдена</h1>
      <button onClick={() => navigate(links.main)}>Вернуться на главную</button>
    </>
  );
};

export default ErrorPage;
