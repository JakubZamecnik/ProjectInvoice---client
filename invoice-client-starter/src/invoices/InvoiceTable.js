import React from "react";
import { Link } from 'react-router-dom';


const InvoiceTable = ({label, items, deleteInvoice}) => {
    return (
        <div>
            <p>
                {label} {items.length}
            </p>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Jméno</th>
                    <th colSpan={3}>Akce</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.invoiceNumber}</td>
                        <td>
                            <div className="btn-group">
                                <Link
                                    to={"/invoices/show/" + item.id}
                                    className="btn btn-sm btn-info"
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/invoices/edit/" + item.id}
                                    className="btn btn-sm btn-warning"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deleteInvoice(item.id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Odstranit
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to={"/invoices/create"} className="btn btn-success">
                Nová faktura
            </Link>

            <Link
                to={"/invoices/statistics"}
                className="btn btn-sm btn-warning"
                >
                Statistiky celkem
            </Link>
        </div>
    );
};

export default InvoiceTable;