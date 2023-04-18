import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { db } from "../firebase";
import { getDatabase, ref, onValue, get } from "../../node_modules/firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LineChart() {

    //set state for fall
    const [fallState, setFallState] = useState(false)
    //set active state
    const [activeState, setActiveState] = useState(true)
    //batt cap
    const [battState, setBattState] = useState([])
    //set temp
    const [tempState, setTempState] = useState([])


    const db = getDatabase();

    // fall data
    const starCountRef = ref(db, 'nugen/' + '/fall');
    useEffect(() => {
        const unsubscribe = onValue(starCountRef, (snapshot) => {
            const fallData = snapshot.val();
            console.log(fallData, "fall");

            setFallState(fallData);

            if (fallData === true) {
                toast.warning("Your kid has fallen down!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    className: "black-background",
                    bodyClassName: "grow-font-size",
                    progressClassName: "fancy-progress-bar",
                });
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // activity rate
    const actCountRef = ref(db, 'nugen/' + '/activity');
    useEffect(() => {
        console.log("hello")
        onValue(actCountRef, (snapshot) => {
            const activityData = snapshot.val();
            console.log(activityData, "active");

            setActiveState(activityData);
        })
            ;
    }, []);

    // battery capacity
    const battCountRef = ref(db, 'nugen/' + '/battery capacity');
    useEffect(() => {
        console.log("hello")
        onValue(battCountRef, (snapshot) => {
            const battData = snapshot.val();
            console.log(battData, "batt");
            setBattState(parseInt(battData))
        })
            ;
    }, []);

    // temperature
    const tempCountRef = ref(db, 'nugen/' + '/temperature');
    useEffect(() => {
        console.log("hello")
        onValue(tempCountRef, (snapshot) => {
            const tempData = snapshot.val();
            console.log(tempData, "temp");


            setTempState(tempData.toFixed(1));
        })
            ;
    }, []);

    // heart rate data
    const heartCountRef = ref(db, 'nugen/' + '/ppg');

    // stationary moving data

    // heart rate chart
    const [heartData, setHeartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Heart Rate Reading',
                data: [],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    });

    const options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                display: false,
                title: {
                    display: true,
                    text: 'IR Reading'
                }
            }
        }
    };

    useEffect(() => {
        onValue(heartCountRef, (snapshot) => {
            const heart_data = snapshot.val();
            if (heart_data) {
                const values = Object.values(heart_data);
                values.sort((a, b) => b.Ts - a.Ts)
                const limitedVal = values.slice(0, 8);
                const labels = limitedVal.map((item) =>
                    new Date(item.Ts).toLocaleTimeString('en-US', { hour12: false })
                );
                labels.reverse()
                setHeartData((prevState) => ({
                    ...prevState,
                    labels,
                    datasets: [
                        {
                            ...prevState.datasets[0],
                            data: limitedVal.map((item) => item.IR),
                        },
                    ],
                }));
            }
        });
    }, []);


    return (
        <div className="px-4 mt-4">
            {/* row 1 */}
            <div className='flex flex-row justify-items-center items-center'>
                {/* fall state */}
                <div className='bg-white w-1/2 mr-2 rounded-md px-4 py-4 flex flex-col justify-items-center items-center shadow-md'>
                    <p className='uppercase text-gray-400 text-xs font-bold mb-2'>Safety</p>
                    {fallState ? (<img className="justify-items-center items-center w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/falling-down.png")}></img>) : (<img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/security.png")}></img>)}
                    <p className='uppercase justify-items-center items-center text-sm mt-2 font-semibold'>{fallState ? "Fell Down" : "Doing Well"}</p>
                </div>
                {/* activity state */}
                <div className='bg-white w-1/2 mr-2 rounded-md px-4 py-4 flex flex-col justify-items-center items-center shadow-md'>
                    <p className='uppercase text-gray-400 text-xs font-bold mb-2'>Activity</p>
                    {activeState ? (<img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/running.png")}></img>) : (<img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/hammock.png")}></img>)}
                    <p className='justify-items-center items-center text-sm mt-2 font-semibold uppercase'>{activeState ? "Active" : "Resting"}</p>
                </div>
            </div>

            {/* row 2 */}
            <div className='flex flex-row align-center mt-4'>
                {/* temperature state */}
                <div className='bg-white w-1/2 mr-2 rounded-md px-4 py-4 flex flex-col justify-items-center items-center shadow-md'>
                <p className='uppercase text-gray-400 text-xs font-bold mb-2'>Temperature</p>
                    <img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/thermometer.png")}></img>
                    <p className='justify-items-center items-center mt-2 text-sm font-semibold uppercase'>{tempState}&#8451;</p>
                </div>
                {/* battery state */}
                <div className='bg-white w-1/2 mr-2 rounded-md px-4 py-4 flex flex-col justify-items-center items-center align-center shadow-md'>
                <p className='uppercase text-gray-400 text-xs font-bold mb-2'>Battery State</p>
                    {battState > 100 ? (
                        <img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/battery-charge.png")}></img>
                    ) : battState < 20 ? (
                        <img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/low-battery.png")}></img>

                    ) : battState > 80 && battState <= 100 ? (
                        <img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/full-battery.png")}></img>
                    ) : (<img className="w-1/4" src={require("/Users/user/Documents/pds-app/src/assets/half-battery.png")}></img>)}
                    <p className='justify-items-center items-center mt-2 text-sm font-semibold uppercase'>{battState > 100 ? 'Charging' : battState + '%'}</p>
                </div>
            </div>

            {/* heart rate graph */}
            <div className='bg-white mt-4 rounded-lg px-2 py-2 shadow-md'>
                <Line data={heartData} options={options} />
            </div>
            <ToastContainer />
        </div>
    );
};

export default LineChart;