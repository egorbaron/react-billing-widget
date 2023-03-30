import React from "react";
import st from "./styles.module.scss";

export const Iframe = (props) => {
  const {url, onLoad, title} = props;
  return (
    <div className={st.wrapper}>
      <iframe src={url} className={st.iframe} onLoad={onLoad} title={title}/>
    </div>
  );
};