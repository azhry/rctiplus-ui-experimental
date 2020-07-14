import React from 'react';
import { Button } from './rctiplus-ui';

// import './tailwind.css';
import './output.css';

class App extends React.Component {
    render() {
        return (
            <div className="p-4">
                My App Component
                <Button>Click</Button>
            </div>
        );
    }
}
export default App