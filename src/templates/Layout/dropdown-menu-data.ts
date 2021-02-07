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

export const menuData: TypeMenuData = [
  {
    menu: { title: 'Мужчинам', route: '/catalog/mans' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки 4д',
        path: '',
        items: [
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
          { title: 'Футблолка 4д четкая', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
    menu: { title: 'Женщинам', route: '/catalog/woman' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
    menu: { title: 'Детям', route: '/catalog/child' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
    menu: { title: 'Чехлы', route: '/catalog/cases' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
    menu: { title: 'Для дома', route: '/catalog/home' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
    menu: { title: 'Подарки', route: '/catalog/prikolnye_podarki' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
    menu: { title: 'Спорт', route: '/catalog/sport' },
    menuList: [
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
        items: [
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
          { title: 'Футблолка 3Д', path: '/catalog/mans' },
        ],
      },
      {
        title: 'Футболки',
        path: '',
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
