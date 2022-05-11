import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calсulator/Calculator';
import Header from './components/Header/Header';
import MealPlan from './components/MealPlan/MealPlan';
import Nutrition from './components/Nutrition/Nutrition';
import c from './App.module.scss'
import MenuComp from './components/Menu/Menu';
import { useSelector } from 'react-redux';
import { selectOpenMenu } from './redux/selectCalculator';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <div className={c.app}>
       <header className={c.header}>
         <Header />
       </header>
       <div className={c.navigation}> 
          <Navigation />
       </div>
       <div className={c.main_wrapper}>
         <main className={c.main}> 
            <Routes>
               <Route path="/" element={<Calculator />}/>
               <Route path="/nutrition" element={<Nutrition />}/>
               <Route path="mealPlan" element={<MealPlan />}/>
            </Routes>
         </main>
       </div>
    </div>
  );
}

export default App;
