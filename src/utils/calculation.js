export function Calculation(array, rowNumber) {
    let resultArray = [];
    let max;
    //sort the data first
    array.sort((a, b) => {
        return b['weight'] - a['weight'];
    })

    const sum = array.reduce((total, data) => total + data['weight'], 0);

    //Case of one row
    if (rowNumber == 1) {
        resultArray.push(array)
    }
    //Case of row number == array length
    else if (rowNumber == array.length) {
        for (let x = 0; x < rowNumber; x++) {
            resultArray.push([array[x]])
        }
    }
    else {
        //Use the block with largest weight as the first row(one and only)
        resultArray.push([array[0]]);
        max = array[0]['weight'];

        //If the row number is 2, add the remaining block 
        if (rowNumber == 2) {
            resultArray.push(array.splice(1))
        }
        //For the remaing rows, 4 is the max number of blocks in one row(except the last row)
        else {
            array.splice(0, 1);

            let remainingPart = [];
            // resultArray = [...resultArray, ...ThreeTimeLooping(array, array.length, max, rowNumber - 1, remainingPart)]

            resultArray = [...resultArray, ...ThreeTimeLooping1(array, array.length, max, rowNumber - 1)]

        }

        resultArray.map(array => {
            var arrayTotal = array.reduce((total, block) => total + block['weight'], 0)
            if (arrayTotal < max) {

            }
        })
    }

    return resultArray;
}

function ThreeTimeLooping1(array, arrayLength, max, rowNumber) {

    let remainingPart = [];

    for (let row = 0; row < rowNumber; row++) {
        //If the row is the last one, add all blocks
        if (row == rowNumber - 1) {
            remainingPart.push(array);
            break;
        }
        else {
            let copyData = Object.assign({}, array[0]);
            let copyData1 = Object.assign({}, array[1]);
            if (array.length > rowNumber - remainingPart.length && copyData['weight'] !== max && copyData['weight']+copyData1['weight']<=max)  {
                remainingPart.push([copyData, copyData1])
                array.splice(0, 2)
            }
            else {
                remainingPart.push([copyData])
                array.splice(0, 1)

            }
        }
    }
    return remainingPart;

}

