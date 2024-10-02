import React from "react";
import { Header } from "../components/Header";
import { AppLeable } from "../components/AppLeable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
         <Header/>
          <form className="welcome__form">
            <AppLeable/>
            <AppLeable/>
           <AppButton/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
