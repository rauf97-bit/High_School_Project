import React from "react";
import { NavLink } from "react-router-dom";
import {DashNav} from "../components/DashNav";
import { Footer } from "../components/Footer";
import { DashedCard } from "../containers/DashedCard";

const Dashboard = () => {
 
  return (
    <div >
      <DashNav />
      <section className="h-[80vh] container mx-auto px-5">   
          <div className=" grid grid-cols-2 gap-16 h-full text-center text-3xl items-center ">
            <NavLink to={'/registeration'} className={"col-span-1 cursor-pointer "}>
              <DashedCard>
                <i className="my-3 m-2 fa fa-user"></i>
                <h3>My Registration</h3>
              </DashedCard>
            </NavLink >
            <NavLink to={'/result'}className={"col-span-1 cursor-pointer "}>
              <DashedCard>
                <i className="my-3 m-2 fa fa-envelope"></i>
                <h3>My Result</h3>
              </DashedCard>
            </NavLink>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
