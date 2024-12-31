import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {apiGet} from "../utils/api";


const InvoiceDetail = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        apiGet("/api/invoices/" + id).then((data) => setInvoice(data));
        console.log(invoice)
    }, [id]);
    

    if (!invoice) {
        return <p>načítám...</p>
    }

    return (
        <>
            <div>
                <h1>Detail faktury</h1>
                <hr/>
                <h3>{invoice.invoiceNumber}</h3>
                <p>
                    <strong>Seller:</strong>
                    <br/>
                    {invoice.seller?.name}
                </p>
                <p>
                    <strong>Buyer:</strong>
                    <br/>
                    {invoice.buyer?.name}
                </p>
                <p>
                    <strong>Datum vydání</strong>
                    <br/>
                    {invoice.issued}
                </p>
                <p>
                    <strong>Due date:</strong>
                    <br/>
                    {invoice.dueDate}
                </p>
                <p>
                    <strong>Produkt:</strong>
                    <br/>
                    {invoice.product}
                </p>
                <p>
                    <strong>Cena:</strong>
                    <br/>
                    {invoice.price}
                </p>
                <p>
                    <strong>DPH:</strong>
                    <br/>
                    {invoice.vat}
                </p>
                <p>
                    <strong>Poznámka:</strong>
                    <br/>
                    {invoice.note}
                </p>
                <p>
                    <strong>ID:</strong>
                    <br/>
                    {invoice.id}
                </p>

                {/* H2 prodávající
                invoice.seller.name */}


            </div>
        </>
    );
};

export default InvoiceDetail;