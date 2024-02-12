import { TypedUseSelectorHook, useDispatch } from "react-redux";
import type { AppDispatch, AppStore } from "./store/store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>;

// export const useAppSelector: TypedUseSelectorHook<> = useSelector;
