import React from 'react';
import notificationsPresentation from 'src/notificationsPresentation';

class notificationsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Benvenuto sulla nostra notifications page!'
        };
    }

    render() {
        return (
            <HomePage message={this.state.message} />
        );
    }
}

export default notificationsContainer;