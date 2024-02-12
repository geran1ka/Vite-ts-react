import { useSelector } from "react-redux";
import s from "./Result.module.scss";

type Props = {};

export const Result = (props: Props) => {
  const {weahter, isLoading, error} = useSelector((state) => state.weather)
  return (
    <div className={s.result}>
      <p>25&#8451;</p>
      <p>Калининград</p>
    </div>
  );
};
