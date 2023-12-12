import { Breadcrumbs } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from 'react-router-dom';
import c from './Navigation.module.scss';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div role="presentation" className={c.wrapper}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: 24 }}>
        <Link underline="hover" color={location.pathname === '/' ? 'black' : 'inherit'} onClick={() => navigate('/')}>
          Для кого?
        </Link>
        <Link
          underline="hover"
          onClick={() => navigate('/nutrition')}
          color={location.pathname === '/nutrition' ? 'black' : 'inherit'}
        >
          Кушательные предпочтения
        </Link>
        <Link
          underline="hover"
          onClick={() => navigate('/mealPlan')}
          color={location.pathname === '/mealPlan' ? 'black' : 'inherit'}
        >
          Ваш план
        </Link>
      </Breadcrumbs>
    </div>
  )
};

export default Navigation;
