import React from "react";

const PersonStatisticsTable = ({label, items}) => {

    return (
        <div>
            <p>
                {label}{items.lenght}
            </p>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Jméno</th>
                        <th>Celkové tržby</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index + 1}>
                            <td>{item.personId}</td>
                            <td>{item.personName}</td>
                            <td>{item.revenue}</td>

                        </tr>

                   ))}
                </tbody>

            </table>



        </div>

    );

};

export default PersonStatisticsTable;