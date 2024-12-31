import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { apiGet } from "../utils/api";
import PersonStatisticsTable from "./PersonStatisticsTable";


const PersonStatistics = () => {

    const[statistics, setStatistics] = useState(null);

    useEffect(() => {
        apiGet("/api/persons/statistics").then((data) => setStatistics(data));

},[]);

    if (!statistics) {
        return <p>načítám...</p>
    }

    return (

        <div>
            <h1>Celkové statistiky FO/PO</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID osoby</th>
                        <th>Jméno</th>
                        <th>Celkové příjmy</th>
                    </tr>
                </thead>
                <tbody>

                {statistics.map((stat) => (
                        <tr key={stat.personId}>
                            <td>{stat.personId}</td>
                            <td>{stat.personName}</td>
                            <td>{stat.revenue} CZK</td>
                        </tr>
                    ))}
                </tbody>
            </table>                           
        </div>
    );

}

export default PersonStatistics;