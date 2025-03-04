export const navigation = [
  {
    text: 'Panel',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Rodzaje',
    icon: 'datafield',
    items: [
      {
        text: 'Produktów',
        path: '/pages/rodzaje-productow'
      }
    ]
  },
  {
    text: 'Jednostki',
    icon: 'detailslayout',
    items: [
      {
        text: 'Skócony',
        path: '/pages/jednostki-responsive'
      },
      {
        text: 'Bieżące',
        path: '/pages/jednostki-biezace'
      },
      {
        text: 'Szukaj',
        path: '/pages/jednostki-pojedyncza',
      }
    ]
  },
  {
    text: 'Czytnik Kodow',
    path: '/pages/czytnik-kodow',
    icon: 'filter'
  }
];
