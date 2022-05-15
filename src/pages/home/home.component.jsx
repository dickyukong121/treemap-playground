import React from 'react';

import './home.styles.scss';
import Input from '../../components/input/input.component';
import Result from '../../components/result/result.component';
function HomePage() {

    return (
        <div className='home'>
            <Input/>
            <Result/>
        </div>
    )
}

export default HomePage;

