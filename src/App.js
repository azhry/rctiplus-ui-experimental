import React from 'react';
// import { Navigation, Button, Input, Dropdown } from './rctiplus-ui';
// import './output.css';

import { Navigation, Button, Input, Dropdown } from '@rctiplus-experimental/ui';
import '@rctiplus-experimental/ui/lib/main.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="p-4 pt-rcti-top">
                    <div>Form</div>
                    <Input 
                        type="text"
                        name="fullname"
                        label="Full Name"
                        placeholder="insert your full name"/>
                    <Input 
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="insert your password"
                        rightAddon={<div>O</div>}/>
                    <br/><br/>
                    <Button>Click</Button>
                </div>
            </div>
            
        );
    }
}
export default App