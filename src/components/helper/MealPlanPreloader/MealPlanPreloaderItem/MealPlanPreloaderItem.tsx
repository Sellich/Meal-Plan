import Skeleton from '@mui/material/Skeleton';
import c from "./MealPlanPreloaderItem.module.scss"

const MealPlanPreloaderItem = () => {
  return (
    <div className={c.wrapper}>
       <div className={c.left}>  
           <Skeleton variant="rectangular" width={210} height={180} />
       </div>
       <div className={c.right}>
          <Skeleton variant="text" height={45}/>
          <Skeleton variant="text" height={45}/>
          <Skeleton variant="text" height={45}/>
          <Skeleton variant="text" height={45}/>
       </div>
    </div>
  )
}

export default MealPlanPreloaderItem