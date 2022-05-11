import { Breadcrumbs } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {

   const location = useLocation();

   let navigate = useNavigate();

  return (
   <div role="presentation">
   <Breadcrumbs aria-label="breadcrumb">
     <Link underline="hover" color={location.pathname === '/' ? 'black' : 'inherit'} onClick={() => navigate('/')}>
       Personal Info
     </Link>
     <Link
       underline="hover"
       onClick={() => navigate('/nutrition')}
       color={location.pathname === '/nutrition' ? 'black' : 'inherit'}
     >
       food preferences
     </Link>
     <Link
       underline="hover"
       onClick={() => navigate('/mealPlan')}
       color={location.pathname === '/mealPlan' ? 'black' : 'inherit'}
     >
       Meal Plan
     </Link>
   </Breadcrumbs>
 </div>
  )
}

export default Navigation