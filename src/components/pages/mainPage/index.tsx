import { useNavigate } from 'react-router-dom';
import { fieldsData } from '../../../models/constants';
import { StartGameForm } from '../../widgets/forms';
import styles from './styles.module.css';
import { ICurrgentGameInfo } from '../../../models/interfaces';
import { links } from '../../../app/config';

const MainPage = () => {

  const navigate = useNavigate();

  const handleStartGame = (data: ICurrgentGameInfo) => {
    navigate(`/${links.game}`, {
      state: {
        type: data.type,
        size: data.size
      },
    })
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Добро пожаловать в игру!</h1>
      <StartGameForm fields={fieldsData} onStart={handleStartGame} />
    </div>
  );
};

export default MainPage;
