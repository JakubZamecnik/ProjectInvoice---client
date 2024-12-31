import React from 'react';
import InputSelect from '../components/InputSelect';
import InputField from '../components/InputField';
import InvoiceIndex from './InvoiceIndex';
import InvoiceTable from './InvoiceTable';


const InvoiceFilter = (props) => {

    const buyerList = props.buyerList;
    const sellerID = props.sellerID;
    const product = props.product;
    const minPrice = props.minPrice;
    const maxPrice = props.maxPrice;
    const limit = props.limit;

    const handleChange = (e) => {
      //  console.log(`handleChange: ${e.target.name} = ${e.target.value}`);
        props.handleChange(e);
    }

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    }

    const filter = props.filter;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <InputSelect
                        name="buyerID"
                        items={props.personList}
                        handleChange={handleChange}
                        label="Odběratel"
                        prompt="nevybrán"
                        value={filter.buyerID}
                    />
                </div>
                <div className="col">
                    <InputSelect
                        name="sellerID"
                        items={props.personList}
                        handleChange={handleChange}
                        label="Dodavatel"
                        prompt="nevybrán"
                        value={filter.sellerID}
                    />
                </div>
                <div className="col">
                    <InputField
                        type="text"
                        min="0"
                        name="product"
                        handleChange={handleChange}
                        label="Produkt"
                        prompt="neuveden"
                        value={filter.product}
                    />
                </div>
            </div>
    
            <div className="row">
                <div className="col">
                    <InputField
                        type="number"
                        min="0"
                        name="minPrice"
                        handleChange={handleChange}
                        label="Minimální cena"
                        prompt="neuveden"
                        value={filter.minPrice}
                    />
                </div>
    
                <div className="col">
                    <InputField
                        type="number"
                        min="0"
                        name="maxPrice"
                        handleChange={handleChange}
                        label="Maximální cena"
                        prompt="neuveden"
                        value={filter.maxPrice}
                    />
                </div>
    
                <div className="col">
                    <InputField
                        type="number"
                        min="1"
                        name="limit"
                        handleChange={handleChange}
                        label="Limit počtu faktur"
                        prompt="neuveden"
                        value={filter.limit}
                    />
                </div>
            </div>
    
            <div className="row">
                <div className="col">
                    <input
                        type="submit"
                        className="btn btn-secondary float-right mt-2"
                        value={props.confirm}
                    />
                </div>
            </div>
        </form>
    );
}

export default InvoiceFilter;