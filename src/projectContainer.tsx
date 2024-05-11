import React from 'react';
import projectPresentation from 'src/projectPresentation';

class projectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Benvenuto sulla nostra projects page!'
        };
    }

    render() {
        return (
            <HomePage message={this.state.message} />
        );
    }
}

export default projectContainer;