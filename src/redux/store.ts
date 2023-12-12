import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import nutritionReducer from "./nutritionReducer";
import menuReducer from "./menuReducer";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    nutrition: nutritionReducer,
    menu: menuReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
