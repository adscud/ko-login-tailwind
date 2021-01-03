const primary = {
  100: '#C9CFFC',
  200: '#95A0F9',
  300: '#5F6EEF',
  400: '#5F6EEF',
  500: '#0011CC',
  600: '#000DAF',
  700: '#000992',
  800: '#000676',
  900: '#000461',
};

const background = {
  'bg-primary-100': {
    backgroundColor: primary['100'],
  },
  'bg-primary-200': {
    backgroundColor: primary['200'],
  },
  'bg-primary-300': {
    backgroundColor: primary['300'],
  },
  'bg-primary-400': {
    backgroundColor: primary['400'],
  },
  'bg-primary-500': {
    backgroundColor: primary['500'],
  },
  'bg-primary-600': {
    backgroundColor: primary['600'],
  },
  'bg-primary-700': {
    backgroundColor: primary['700'],
  },
  'bg-primary-800': {
    backgroundColor: primary['800'],
  },
  'bg-primary-900': {
    backgroundColor: primary['900'],
  },
};

const text = {
  'text-primary-100': {
    color: primary['100'],
  },
  'text-primary-200': {
    color: primary['200'],
  },
  'text-primary-300': {
    color: primary['300'],
  },
  'text-primary-400': {
    color: primary['400'],
  },
  'text-primary-500': {
    color: primary['500'],
  },
  'text-primary-600': {
    color: primary['600'],
  },
  'text-primary-700': {
    color: primary['700'],
  },
  'text-primary-800': {
    color: primary['800'],
  },
  'text-primary-900': {
    color: primary['900'],
  },
};

export const colorPrimary = {
  ...background,
  ...text,
};
