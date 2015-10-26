import React from 'react';
import Icon from './../../icon/icon';

var Fullscreen = React.createClass({

    propTypes: {
        fullscreen: React.PropTypes.func
    },

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.fullscreen !== nextProps.fullscreen;
    },

    render() {
        return (
            <div onClick={this.props.fullscreen} className="video-fullscreen video__control" >
                <Icon name="resize-full" />
            </div>
        );
    }
});

export default Fullscreen;