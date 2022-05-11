type IData = {
   sex: number;
   age: number;
   weight: number;
   height: number;
   active: number;
}

export const countingCalories = (data: IData) => {
      const count = ((10 * data.weight) + (6.25 * data.height) - (5 * data.age) + (data.sex === 1 ? 161 : -5)) * data.active;
      return count;
      
}