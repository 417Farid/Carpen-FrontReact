import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { React, useState } from 'react';
import Notifications from './Notifications';
import { notificationsData } from './header';

import {
     MdNotificationsActive,
     MdNotificationsNone,
} from 'react-icons/md';

import {
     NavItem,
     NavLink,
     Popover,
     PopoverBody,
} from 'reactstrap';

import withBadge from './withBadge';

const MdNotificationsActiveWithBadge = withBadge({
     size: 'md',
     color: 'primary',
     style: {
          top: -10,
          right: -10,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
     },
     children: <small>5</small>,
})(MdNotificationsActive);

const NavAlert = () => {

     const [isOpenNotificationPopover, setIsOpenNotificationPopover] = useState(false);
     const [isNotificationConfirmed, setIsNotificationConfirmed] = useState(false);

     const toggleNotificationPopover = () => {
          setIsOpenNotificationPopover(!isOpenNotificationPopover);

          if (!isNotificationConfirmed) {
               setIsNotificationConfirmed(true);
          }
     };

     return (
          <NavItem className="d-inline-flex">
               <NavLink id="Popover1" className="position-relative">
                    {isNotificationConfirmed ? (
                         <MdNotificationsNone
                              size={25}
                              className="text-light can-click light"
                              onClick={toggleNotificationPopover}
                              style={{color:'#FFFFFF !important'}}
                         />
                    ) : (
                         <MdNotificationsActiveWithBadge
                              size={25}
                              className="text-light can-click animated swing infinite light"
                              onClick={toggleNotificationPopover}
                              style={{color:'#FFFFFF !important'}}
                         />
                    )}
               </NavLink>
               <Popover
                    placement="bottom"
                    isOpen={isOpenNotificationPopover}
                    toggle={toggleNotificationPopover}
                    target="Popover1"
               >
                    <PopoverBody>
                         <Notifications notificationsData={notificationsData} />
                    </PopoverBody>
               </Popover>
          </NavItem>
     );
}

export default NavAlert;