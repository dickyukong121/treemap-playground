import { useSelector } from 'react-redux';
import DATA from '../../example.data';
import { selectCurrentDATA } from '../../store/data/data.selector';
import { Calculation } from '../../utils/calculation';
import Row from '../row/row.component';
import './result.styles.scss';

const sampleFormFields = {
    row: 3,
    json: JSON.stringify(DATA, null, '\t'),
}
function Result() {

    const width = 100
    const height = 600

    let data = useSelector(selectCurrentDATA)
    if (data == null) {
        data = sampleFormFields
    }

    let resultArray = Calculation(JSON.parse(data['json']), data['row'])
    let heightForEachRow = height / resultArray.length

    let maxWeightOfRow = 0
    {resultArray.map((array) => {
        let max = array.reduce((total, block)=>total+block['weight'],0)
        if(max>maxWeightOfRow) {
            maxWeightOfRow = max
        }
    })}
    const style = {
        height:height,
        width: '50%',
        maxWidth: '50%',
        minWidth: '50%',
    };

    return (
        <div className='result-container' style={style} >
            {resultArray.map((array, key) => (
                <Row height={heightForEachRow} array={array} key={key} width={width} maxWeightOfRow={maxWeightOfRow}/>
            ))}
        </div>
    );

}


export default Result;