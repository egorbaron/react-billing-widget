import React from "react";
import st from "./styles.module.scss";
import { Loading } from "../Loading";

export const AppWrapper = (props) => {
  const { children, loading, onClose } = props;
  const containerClassName = `${st.container} ${!loading ? st.loaded : ""}`;
  return (
    <div className={st.wrapper}>
      <div className={containerClassName}>
      {loading ? (
         <Loading/>
       ) : (
        <div className={st.icon} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M9.85355 10.5607L19 19.7071L19.7071 19L10.5607 9.85355L19.7071 0.707108L19 0L9.85355 9.14645L0.707107 0L0 0.707107L9.14645 9.85355L0 19L0.707107 19.7071L9.85355 10.5607Z"></path></svg>
        </div>
       )}
       {children}
      </div>
    </div>
  );
};