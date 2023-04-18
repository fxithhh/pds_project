import React from "react";
import DataVisual from "../components/data-viz";
import KidsCard from "../components/kids-card";
import ProfileCard from "../components/profile-card";

function Welcome() {

    return (
        <div className="h-screen justify-center items-center">
            <nav className="fixed top-0 left-0 w-full z-10 bg-white md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
                <div className="w-full mx-auto items-center flex flex-row justify-between md:flex-no-wrap md:px-10">
                    <div className="flex flex-col justify-items-center items-center w-1/3"><img className="w-3/4" src={require("/Users/user/Documents/pds-app/src/assets/nugen.png")}></img></div>
                    <div className="flex flex-col justify-items-center items-center w-1/3"><p className="font-bold text-sm">Welcome, <span className="text-naorange">Faith</span></p></div>
                    <div id="logout" className="flex flex-col justify-items-center items-center w-1/3"><p className="font-bold text-sm">Logout</p></div>
                </div>
            </nav>

            <KidsCard></KidsCard>
            <ProfileCard></ProfileCard>
            <DataVisual></DataVisual>

        </div>
    );
}

export default Welcome;