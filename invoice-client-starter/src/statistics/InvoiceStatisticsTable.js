import React from "react";

const InvoiceStatisticsTable = ({label, items}) => {

    return (
        <div>
            <p>
                {label}{items.lenght}
            </p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Current Year Sum</th>
                        <th>All Time Sum</th>
                        <th>Total Invoices</th>
                    </tr>
                </thead>
                <tbody>
                    {(items, index) => (
                        <tr key={index + 1}>
                            <td>{items.currentYearSum}</td>
                            <td>{items.allTimeSum}</td>
                            <td>{items.invoiceCount}</td>

                        </tr>

                   )               
                    
                    }
                </tbody>

            </table>



        </div>

    );

};

export default InvoiceStatisticsTable;