import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilNotes,
  cilSpeedometer,
  cilMoney,
  cibMyspace,
  cibReadme,
  cilHouse,
  cilDescription,
  cilBullhorn,
  cibAdobeAcrobatReader,
  cilCalculator,
  cilChatBubble,
  cibPinboard,
  cilLibrary,
  cilTags,
  cilChart,
  cilLibraryBuilding,
  cilCommentBubble,
  cilBook,
  cibGooglesCholar,
  cilWc,
  cilBuilding,
  cibOpsgenie,
  cilPin,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'User',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   // icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   // icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Users',
  },
  {
    component: CNavGroup,
    name: 'Students',
    to: '/student',
    icon: <CIcon icon={cibGooglesCholar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Student',
        to: '/student/add',
      },
      {
        component: CNavItem,
        name: 'Student List',
        to: '/student/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Teachers',
    to: '/teacher',
    icon: <CIcon icon={cibOpsgenie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Teacher',
       
        to: '/teacher/add',
      },
      {
        component: CNavItem,
        name: 'Teacher List',
       
        to: '/teacher/list',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Parents',
    icon: <CIcon icon={cilWc} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Parent',
      
        to: '/parent/add',
      },
      {
        component: CNavItem,
        name: 'Parent List',
      
        to: '/parent/list',
      },
    ],
  },
  {
    component : CNavTitle,
    name : 'Academic'
  },
  {
    component: CNavGroup,
    name: 'Department',
    icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
    items: [
        {
          component: CNavItem,
          name: 'Add Department',
          to: '/department/add',
        },
        {
          component: CNavItem,
          name: 'Department List',
          to: '/department/list',
        },
      ],
  },
  {
    component: CNavGroup,
    name: 'Course',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
        {
          component: CNavItem,
          name: 'Add Course',
          to: '/Course/add',
        },
        {
          component: CNavItem,
          name: 'Course List',
          to: '/Course/list',
        },
      ],
  },
  {
    component: CNavGroup,
    name: 'Class/Branch',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Class/Branch',
        to: '/class/add',
      },
      {
        component: CNavItem,
        name: 'Class/Branch List',
        to: '/class/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Subject',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Subject',
        to: '/subject/add',
      },
      {
        component: CNavItem,
        name: 'Subject List',
        to: '/subject/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Batches',
    icon: <CIcon icon={cibMyspace} customClassName="nav-icon" />,
    items: [
        {
          component: CNavItem,
          name: 'Add Batches',
          to: '/Batches/add',
        },
        {
          component: CNavItem,
          name: 'Batches List',
          to: '/Batches/list',
        },
      ],
  },
  {
    component: CNavGroup,
    name: 'Test/Exam',
    icon: <CIcon icon={cibReadme} customClassName="nav-icon" />,
    items: [
        {
          component: CNavItem,
          name: 'Add Test/Exam',
          to: '/exam/add',
        },
        {
          component: CNavItem,
          name: 'Test-Exam List',
          to: '/exam/list',
        },
      ],
  },
  {
    component: CNavGroup,
    name: 'Homework',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    items: [
        {
          component: CNavItem,
          name: 'Add Homework',
          to: '/Homework/add',
        },
        {
          component: CNavItem,
          name: 'Homework List',
          to: '/Homework/list',
        },
      ],
  },
  {
    component: CNavGroup,
    name: 'Seminars',
    icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,
    items: [
        {
          component: CNavItem,
          name: 'Add Seminars',
          to: '/Seminars/add',
        },
        {
          component: CNavItem,
          name: 'Seminars List',
          to: '/Seminars/list',
        },
      ],
  },
   
  {
    component: CNavTitle,
    name: 'Miscellaneous',
  },
   {
    component: CNavGroup,
    name: 'Performance',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Performance',
        to: '/Performance/add',
      },
      {
        component: CNavItem,
        name: 'Performance List',
        to: '/Performance/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notice',
    icon: <CIcon icon={cilBullhorn} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Notice',
        to: '/Notice/add',
      },
      {
        component: CNavItem,
        name: 'Notice List',
        to: '/Notice/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Activity',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Activity',
        to: '/Activity/add',
      },
      {
        component: CNavItem,
        name: 'Activity List',
        to: '/Activity/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Material',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Material',
        to: '/Material/add',
      },
      {
        component: CNavItem,
        name: 'Material List',
        to: '/Material/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Projects/Tasks',
    icon: <CIcon icon={cilPin} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Projects/Tasks',
        to: '/Projects/add',
      },
      {
        component: CNavItem,
        name: 'Projects/Tasks List',
        to: '/Projects/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Google Review',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    // icon : <CIcon className='bi bi-person' customClassName="nav-icon" />,
   items: [
      {
        component: CNavItem,
        name: 'Add Google Review',
        to: '/review/add',
      },
      {
        component: CNavItem,
        name: 'Google Review List',
        to: '/review/list',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   // icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
