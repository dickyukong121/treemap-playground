import DATA from "../../example.data";
const Input=()=>{

    let resultArray =[]
    const rowNumber = 5;

    DATA.sort((a,b)=>{
        return b['weight'] - a['weight'];
    })
    const sum = DATA.reduce((total, data) => total + data['weight'], 0);

    if(rowNumber == DATA.length) {
        for (let x =0 ; x< rowNumber ; x++)
        resultArray.push([DATA[x]])
    }
    console.log(resultArray)
    console.log(DATA);
    console.log(sum)

    const averageValueByRow = sum/rowNumber;
    const largestValue = DATA[0]['weight'];
    const numberOfLength = averageValueByRow>=largestValue? Math.ceil(averageValueByRow) : largestValue

    console.log(numberOfLength)
    let arraySet = [];
    for(let x =0; x<1 ; x++) {
        if(DATA[x]['weight'] == numberOfLength) {
            arraySet.push(DATA[x]);
        } else {
            let numberNeededToAdd = numberOfLength - DATA[x]['weight'];
            DATA.splice(x,1)
            var remaining = remainingData(DATA, numberNeededToAdd)
            console.log(remaining)
        }
    }

    function remainingData(dataSet, numberNeededToAdd){
        console.log(dataSet)
        console.log(numberNeededToAdd)
        var filterData = dataSet.filter(data=>data['weight'] == numberNeededToAdd)
        // if(filter>=)
    }

    return (
        <div className='input-container'>
            <input></input>
            <input value={DATA}></input>
        </div>
    );

}


export default Input;