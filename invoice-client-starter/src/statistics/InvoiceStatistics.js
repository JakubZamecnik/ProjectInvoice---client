import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { apiGet } from "../utils/api";


const InvoiceStatistics = () => {
    
    const [statistics, setStatistics] = useState(null);


    useEffect(() => {
        apiGet("/api/invoices/statistics").then((data) => setStatistics(data));

},[]);

    if (!statistics) {
        return <p>načítám...</p>
    }

    return (

        <div>
            <h1>Celkové statistiky faktur</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Celková suma</th>
                        <th>Suma za tento rok</th>
                        <th>Počet faktur</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th></th>
                        <th>{statistics.allTimeSum} CZK</th>
                        <th>{statistics.currentYearSum} CZK</th>
                        <th>{statistics.invoicesCount}</th>
                    </tr>
                </tbody>
            </table>                           
        </div>
    );
};

export default InvoiceStatistics;