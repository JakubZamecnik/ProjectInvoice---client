import React, {useEffect, useState} from "react";

import {apiDelete, apiGet} from "../utils/api";

import InvoiceTable from "./InvoiceTable";
import InvoiceFilter from "./InvoiceFilter";

const InvoiceIndex = () => {
    const [invoices, setInvoices] = useState([]);
    const [personListState, setPersonList] = useState([]);
    const [productListState, setProductList] = useState([]);
    const [filterState, setFilter] = useState({
    buyerID: undefined,
    sellerID: undefined,
    product: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    limit: undefined,
    });

    const deleteInvoice = async (id) => {
        try {
            await apiDelete("/api/invoices/" + id);
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
        setInvoices(invoices.filter((item) => item.id !== id)); //tady jsem změnil ._id na .id
    };

    useEffect(() => {
        apiGet("/api/invoices").then((data) => setInvoices(data));
    }, []);

    useEffect(() => {
        apiGet('/api/persons').then((data) => setPersonList(data));
        apiGet('/api/invoices').then((data) => setProductList(data));
        apiGet('/api/invoices').then((data) => setInvoices(data));
    }, []);

    const handleChange = (e) => {
        // pokud vybereme prázdnou hodnotu (máme definováno jako true/false/'' v komponentách), nastavíme na undefined
        if (e.target.value === "false" || e.target.value === "true" || e.target.value === '') {
            setFilter(prevState => {
                return {...prevState, [e.target.name]: undefined}
            });
        } else {
            setFilter(prevState => {
                return { ...prevState, [e.target.name]: e.target.value}
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = filterState;
    
        const data = await apiGet("/api/invoices", params);
        setInvoices(data);
    };

    return (
        <div>
            <h1>Seznam faktur</h1>
            <hr />
            
           {  <InvoiceFilter
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                personList={personListState}
                productList={productListState}
                filter={filterState}
                confirm="Filtrovat faktury"
            /> }
            <hr /> 
            <InvoiceTable deleteInvoice={deleteInvoice} items={invoices} label="Počet faktur:" />
        </div>
    );
};
export default InvoiceIndex;