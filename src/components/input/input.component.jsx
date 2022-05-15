import { useEffect, useState } from "react";
import DATA from "../../example.data";
import { Calculation } from '../../utils/calculation';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './input.styles.scss'
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchDataSuccess } from "../../store/data/data.action";
import { selectCurrentDATA } from "../../store/data/data.selector";
const sampleFormFields = {
    row: 3,
    json: JSON.stringify(DATA, null, '\t'),
}
const Input = () => {

    let defaultFormFields = useSelector(selectCurrentDATA)
    if (defaultFormFields == null) {
        defaultFormFields = sampleFormFields
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { row, json } = formFields;
    const dispatch = useDispatch();

    const handleReset = () => {
        setFormFields(sampleFormFields);
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    const isJsonString = (string) => {
        try {
            (JSON.parse(string))
        } catch (e) {
            return false;
        }
        return true;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        var nonInteger = false;

        try {
            for (var index = 0; index < JSON.parse(json).length; ++index) {

                var weight = JSON.parse(json)[index]['weight'];

                if (!Number.isInteger(weight) || weight < 1 || String(weight)[0] == '0') {
                    nonInteger = true;
                    break;
                }
            }

            if (nonInteger) {
                alert('All weight should be integer, non-zero, positive, also the first digit must not be 0')
            }
            else if (!Number.isInteger(Number(row))||Number(row)<1) {
                alert('Your row must be integer and at least 1')
            }
            else if (!isJsonString(json)) {
                alert('Your json is invalid')
            }
            else if (JSON.parse(json)?.length < row) {
                alert('Row number must not be larger than JSON length')
            }

            else if (JSON.parse(json)?.length > 50) {
                alert('JSON length must not be larger than 50')
            }
            else {
                dispatch(fetchData(
                    {
                        'row': row,
                        'json': json,
                    }
                ));


            }
        }
        catch {
            alert('Please check the json again')
        }
    }
    return (
        <div className='input-container'>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <h3>Row Number</h3>
                <FormInput
                    type='number'
                    required
                    onChange={handleChange}
                    name='row'
                    value={row}
                />

                <h3>JSON</h3>
                <textarea rows="30" cols="50" name='json' onChange={handleChange} value={json}></textarea>


                <div className='buttons-container'>
                    <Button type='submit'>Submit</Button>
                    <Button type='reset'>Reset</Button>
                </div>
            </form>
        </div>

    );

}


export default Input;