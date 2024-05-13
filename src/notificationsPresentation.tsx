import React from 'react';

class notificationsPresentation extends React.Component {
    render() {
        return (
            <div>
                <h1>Notifications</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}