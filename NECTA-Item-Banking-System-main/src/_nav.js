import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilPencil,
  cilCheck,
  cilClipboard,
  cilStar,
  cilHome,
  cilSettings,
  cilChevronRight,
  cilUser,
  cilLockLocked,
  cilFile
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const handleNavigation = (e) => {
  e.preventDefault();
  window.location.href = '/src/views/Form/CreateItem.html';
};

const handleNavigation2 = (e) => {
  e.preventDefault();
  window.location.href = '/src/views/Form/UserForm.html';
};

const navStyles = {
  sidebar: {
    backgroundColor: '#1480af',
    color: '#eab676',
    fontFamily: 'Arial, sans-serif',
  },
  navItem: {
    color: '#ecf0f1',
    fontWeight: 'bold',
    fontSize: '1rem',
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  navItemHover: {
    backgroundColor: '#34495e',
  },
  navIcon: {
    marginRight: '10px',
    color: '#3498db',
  },
  navIconSmall: {
    marginRight: '10px',
    color: '#ecf0f1',
    fontSize: '0.8rem',
  },
  navGroup: {
    backgroundColor: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  navGroupItem: {
    fontSize: '0.9rem',
    paddingLeft: '40px',
  },
  navTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#3498db',
    padding: '15px 15px',
    textTransform: 'uppercase',
  },
};

const _nav = [
  {
    component: CNavItem,
    name: '',
    style: {
      ...navStyles.navItem,
      backgroundColor: '#3498db',
      height: '60px',
      marginBottom: '1rem',
    },
  },
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <CIcon icon={cilHome} style={navStyles.navIcon} />,
    style: navStyles.navItem,
  },
  {
    component: CNavTitle,
    name: 'Item Development',
    style: navStyles.navTitle,
  },
  {
    component: CNavGroup,
    name: 'Author',
    icon: <CIcon icon={cilPencil} style={{ ...navStyles.navIcon, color: '#e74c3c' }} />,
    style: navStyles.navGroup,
    items: [
      {
        component: CNavItem,
        name: 'Create Item',
        to: '#',
        onClick: handleNavigation,
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'View Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Moderator',
    icon: <CIcon icon={cilCheck} style={{ ...navStyles.navIcon, color: '#f39c12' }} />,
    style: navStyles.navGroup,
    items: [
      {
        component: CNavItem,
        name: 'Review Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'Approve Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'Reject Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'View Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Proofreader',
    icon: <CIcon icon={cilClipboard} style={{ ...navStyles.navIcon, color: '#2ecc71' }} />,
    style: navStyles.navGroup,
    items: [
      {
        component: CNavItem,
        name: 'Check Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'Suggest Modifications',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'View Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Subject Coordinator',
    icon: <CIcon icon={cilFile} style={{ ...navStyles.navIcon, color: '#9b59b6' }} />,
    style: navStyles.navGroup,
    items: [
      {
        component: CNavItem,
        name: 'Create Items',
        to: '#',
        onClick: handleNavigation,
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'View Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Chief Proofreader',
    icon: <CIcon icon={cilStar} style={{ ...navStyles.navIcon, color: '#f1c40f' }} />,
    style: navStyles.navGroup,
    items: [
      {
        component: CNavItem,
        name: 'Approve Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'Review Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'View Items',
        to: 'https://docs.google.com/spreadsheets/d/1ceNvLPG856p2x7qX1whsLtBPbQGIHmdsPmZYdTDyYGU/edit?resourcekey=&gid=1148228698#gid=1148228698',
        icon: <CIcon icon={cilChevronRight} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilSettings} style={navStyles.navIcon} />,
    style: navStyles.navGroup,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
        icon: <CIcon icon={cilUser} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '#',
        onClick: handleNavigation2,
        icon: <CIcon icon={cilLockLocked} style={navStyles.navIconSmall} />,
        style: { ...navStyles.navItem, ...navStyles.navGroupItem },
      },
    ],
  },
];

export default _nav;
