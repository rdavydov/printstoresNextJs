import { HeaderMenu } from 'src/components/common/DropdownHeaderMenu/DropdownMenu';

export type TypeMenuData = Array<{
  menu: {
    title: string;
    route: string;
  };
  menuList: Array<{
    title: string;
    path: string;
    items: Array<{ title: string; path: string }>;
  }>;
}>;

export type MenuList = Array<{
  title: string;
  path: string;
  items: Array<{ title: string; path: string }>;
}>;

export type MenuItems = Array<{ title: string; path: string }>;

export const menuData: HeaderMenu = [
  {
    menuLabel: 'Мужчинам',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
  {
    menuLabel: 'Женщинам',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
  {
    menuLabel: 'Детям',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
  {
    menuLabel: 'Чехлы',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
  {
    menuLabel: 'Для дома',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
  {
    menuLabel: 'Подарки',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
  {
    menuLabel: 'Спорт',
    menuItems: [
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
    ],
  },
];
