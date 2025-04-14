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
    text: 'Skaner',
    path: '/pages/czytnik-kodow',
    icon: 'filter'
  },
  {
    text: 'Kamera',
    path: '/pages/jednostka-camera-capture',
    icon: 'isnotblank'
  },
  {
    text: 'Scandit Skaner',
    path: '/pages/scandit-skaner',
    icon: 'folder'
  }, 
  {
    text: 'Dynamsoft Scanner',
    path: '/pages/intascan-scanner',
    icon: 'folder'
  }, 
  {
    text: 'Ngx Scanner',
    path: '/pages/ngx-skaner',
    icon: 'folder'
  }
];
