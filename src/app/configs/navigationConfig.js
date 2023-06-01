import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    subtitle: 'Unique dashboard designs',
    type: 'group',
    icon: 'heroicons-outline:home',
    children: [
      {
        id: 'demand-letter',
        title: 'Demand Letter',
        type: 'item',
        icon: 'heroicons-outline:pencil-alt',
        url: 'example',
      },
      {
        id: 'products',
        title: 'Products',
        type: 'item',
        icon: 'heroicons-outline:collection',
        url: '',
      },
      {
        id: 'pricing',
        title: 'Pricing',
        type: 'item',
        icon: 'heroicons-outline:cash',
        url: '',
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        icon: 'heroicons-outline:cog',
        url: '',
      },
    ],
  },
];

export default navigationConfig;
