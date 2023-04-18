// ./components/LineChart.js

import React from "react";

function ProfileCard() {
    const profileData = [{
        name: "Jenna Tan",
        age: "6 years old",
        school: "Maple Bear (Upper East Coast)",
        status: "Healthy"
    }
    ];

    return (
        <div>
            <div className="w-full mt-2 px-4">

                <div className="flex flex-row rounded-md bg-white px-4 py-2 shadow-md">
                    <div className="w-2/5 align-center justify-items-center items-center flex">
                        <img src={require("/Users/user/Documents/pds-app/src/assets/profile.png")}></img>
                    </div>
                    <div className="w-3/4 ml-8 align-center justify-items-center items-center mt-2">
                    <h5 className="font-bold">{profileData[0].name}</h5>
                    <h6 className="font-semibold text-gray-800">{profileData[0].age}</h6>
                    <p className="text-sm stext-gray-400">{profileData[0].school}</p>
                    <div className={profileData[0].status === "Healthy" ? "border-2 rounded-xl border-green-400 bg-green-400 w-2/5 text-center text-white mr-8 my-2 text-sm" : "border-2 rounded-xl border-orange-400 bg-orange-400 w-2/5 text-center text-white mr-8 my-2 text-sm"}>{profileData[0].status}</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProfileCard;