import React from 'react';


class DelayedButton extends React.Component {

    timeout = (event) => {
        event.persist()
        var props = this.props.onDelayedClick(event)
        setTimeout(function() {props}, this.props.delay)
    }


    render() {
        return <button onClick={this.timeout} />

    }

}

export default DelayedButton