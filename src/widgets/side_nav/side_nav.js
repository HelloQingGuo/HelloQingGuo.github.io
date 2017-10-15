import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';
import './side_nav.css';

const SideNav = (props) => {
  const { bgShown, curNav, navItems, setCurNav, handleClickOnNavbutton } = props;
  const handleClick = (navItemId) => {
    setCurNav(navItemId);
    handleClickOnNavbutton();
  };
  return (
    <div className="sidenav">
      <Button
        shape="circle"
        icon="bars"
        size="large"
        type="primary"
        className="navbutton"
        style={bgShown ? { color: '#444', boxShadow: '2px 2px 6px #d3d3d3' } : { color: '#fff' }}
        onClick={handleClickOnNavbutton}
      />
      <div className={bgShown ? 'bgcover shown' : 'bgcover'}>
        {bgShown
          ? <QueueAnim
            component="ul"
            className="navlist"
            type="right"
            interval={50}
            duration={90}
            ease="easeInSine"
            >
            {navItems.map(navItem =>
              (<li className={navItem.id === curNav ? 'curNav' : ''} key={navItem.name}>
                <Link to={navItem.num} onClick={() => handleClick(navItem.id)}>
                  {navItem.name}
                </Link>
              </li>),
            )}
          </QueueAnim>
          : null}
      </div>
    </div>
  );
};
export default SideNav;
