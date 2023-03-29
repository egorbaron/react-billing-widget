import React from "react";
import st from "./styles.module.scss";

export const Iframe = (props) => {
  const {url} = props;
  return (
    <div className={st.wrapper}>
      <iframe src={url} className={st.iframe}/>
    </div>
  );
};