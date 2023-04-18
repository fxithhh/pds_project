// ./components/LineChart.js

import React from "react";

function KidsCard() {
    const kidsData = [{
        name: "Jenna Tan",
        age: "6 years old",
        school: "Maple Bear (Upper East Coast",
        status: "Healthy"
    },

    {
        name: "Charlie Tan",
        age: "4 years old",
        school: "Maple Bear (Upper East Coast",
        status: "Sick"
    },

    {
        name: "Kevin Tan",
        age: "5 years old",
        school: "Maple Bear (Upper East Coast",
        status: "Sick"
    }
    ];

    return (
        <div className="mt-20 px-4">
            <h3 className="mb-4 uppercase font-bold">Check on your children</h3>
            <div className="flex overflow-x-auto space-x-4 w-full">
                {kidsData.map((data, index) => (
                    <div className="flex-shrink-0 border-l-8 border-nablue shadow-lg rounded-md bg-white w-3/4 px-4 py-2 shadow-md mb-2" key={index}>
                        <h5 className="font-bold text-sm">{data.name}</h5>
                        <h6 className="font-semibold text-gray-800 text-xs">{data.age}</h6>
                        <p className="text-sm stext-gray-400 text-xs">{data.school}</p>
                        <div className={data.status ==="Healthy" ? "border-2 rounded-xl border-green-400 bg-green-400 w-2/5 text-center text-white mr-8 my-2 text-xs" : "border-2 rounded-xl border-orange-400 bg-orange-400 w-2/5 text-center text-white mr-8 my-2 text-xs"}>{data.status}</div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default KidsCard;