import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

class LinkImage extends Component {
    render() {
        let { link } = this.props;
        let image = '/images/placeholder.jpg';

        if (!_.isUndefined(link.featuredImage) && !_.isNull(link.featuredImage)) {
            image = link.featuredImage;
        }

        return (
            <div className="image">
                <img src={image} />
            </div>
        )
    }
}

LinkImage.propTypes = {
    link: PropTypes.object
};

export default LinkImage;