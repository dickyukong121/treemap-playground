import './block.styles.scss'


function Block({ height, block, width, maxWeightOfRow }) {

    let ratioOfWeight = block['weight'] / maxWeightOfRow;
    let name = block['name'].length > 50 ? block['name'].slice(0, 50) : block['name'];
    let percentage = +(block['value'] * 100).toFixed(2) + '%';
    const style = {
        height: height,
        width: ratioOfWeight * width + '%',
        backgroundColor: block['value'] > 0 ? 'green' : 'red'
    };
    return (
        <div className='block' style={style}>
            <div className='container'>
                <div className='name'>{name}</div>
                <div className='percentage'>{percentage}</div>
            </div>
        </div>
    )
}


export default Block;