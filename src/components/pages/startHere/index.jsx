import React,{Fragment} from 'react';
import { Widget } from '@typeform/embed-react';

// META TAG
import MetaTag from '../../utils/MetaTag';

const StartHere = () => {
    return <Fragment>
        <MetaTag
        title='start-here | The Shortcut'
        description='Welcome to The Shortcut! Let is figure out how we can help you today!'
        screenshot='https://theshortcut.org/wp-content/uploads/2021/06/about-us.png'
        />
        <Widget id='YiWWH3I6' style={{ width: '100%', height: '100vh' }} className='my-form' />
    </Fragment>; 
}

export default StartHere;
