import React from 'react';
import PropTypes from '../../util/propTypes';

import { Media } from 'reactstrap';

const Notifications = ({ notificationsData }) => {
  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, message, date }) => (
      <div className='p-0'>
        <Media key={id} className="">
          <Media body middle className="align-self-center">
            {message}
          </Media>
          <Media right className="align-self-center">
            <small className="text-muted">{date}</small>
          </Media>
        </Media>
        <hr />
      </div>
    ))
  );
};

Notifications.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

export default Notifications;
