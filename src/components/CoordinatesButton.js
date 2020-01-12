import React from 'react';


class CoordinatesButton extends React.Component {

    createArray = (event) => {
        let coordinatesArray = [event.pageX, event.pageY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render() {
        return <button onClick={this.createArray} />
    }

}

export default CoordinatesButton