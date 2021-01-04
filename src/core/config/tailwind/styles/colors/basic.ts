const basic = {
  '100': '#FFFFFF',
  '200': '#F7F9FC',
  '300': '#EDF1F7',
  '400': '#D0D5DE',
  '500': '#A7B0C2',
  '600': '#49556D',
  '700': '#2E3A59',
  '800': '#222B45',
  '900': '#192038',
};

const background = {
  'bg-basic-100': {
    backgroundColor: basic['100'],
  },
  'bg-basic-200': {
    backgroundColor: basic['200'],
  },
  'bg-basic-300': {
    backgroundColor: basic['300'],
  },
  'bg-basic-400': {
    backgroundColor: basic['400'],
  },
  'bg-basic-500': {
    backgroundColor: basic['500'],
  },
  'bg-basic-600': {
    backgroundColor: basic['600'],
  },
  'bg-basic-700': {
    backgroundColor: basic['700'],
  },
  'bg-basic-800': {
    backgroundColor: basic['800'],
  },
  'bg-basic-900': {
    backgroundColor: basic['900'],
  },
};

const text = {
  'text-basic-100': {
    color: basic['100'],
  },
  'text-basic-200': {
    color: basic['200'],
  },
  'text-basic-300': {
    color: basic['300'],
  },
  'text-basic-400': {
    color: basic['400'],
  },
  'text-basic-500': {
    color: basic['500'],
  },
  'text-basic-600': {
    color: basic['600'],
  },
  'text-basic-700': {
    color: basic['700'],
  },
  'text-basic-800': {
    color: basic['800'],
  },
  'text-basic-900': {
    color: basic['900'],
  },
};

const border = {
  'border-basic-100': {
    borderColor: basic['100'],
  },
  'border-basic-200': {
    borderColor: basic['200'],
  },
  'border-basic-300': {
    borderColor: basic['300'],
  },
  'border-basic-400': {
    borderColor: basic['400'],
  },
  'border-basic-500': {
    borderColor: basic['500'],
  },
  'border-basic-600': {
    borderColor: basic['600'],
  },
  'border-basic-700': {
    borderColor: basic['700'],
  },
  'border-basic-800': {
    borderColor: basic['800'],
  },
  'border-basic-900': {
    borderColor: basic['900'],
  },
};

export const colorBasic = {
  ...background,
  ...text,
  ...border,
};
