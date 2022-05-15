import Block from '../block/block.component';
import './row.styles.scss'


function Row ({height, array, width, maxWeightOfRow}){

    return(
        <div className='row' style={{height:height}}>
            {array.map((block,key)=>(
                <Block height={height} block={block} width={width} maxWeightOfRow={maxWeightOfRow} key={key}/>
            ))}
        </div>
    )
}


export default Row;