import React from 'react';

class projectPresentation extends React.Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}