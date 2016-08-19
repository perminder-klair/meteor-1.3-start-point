import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LinksViewPage from '../pages/LinksViewPage.jsx';

//to get database
import { Links } from '../../../api/links/links';

export default createContainer((props) => {
    let handle = Meteor.subscribe('links.single', props.id);

    return {
        loading: !handle.ready(),
        user: Meteor.user(),
        link: Links.findOne(props.id)
    };
}, LinksViewPage);