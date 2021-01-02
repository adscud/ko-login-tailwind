import {create} from 'tailwind-rn';
import {default as baseStyleTailwind} from 'tailwind-rn/styles.json';
import styles from './styles/styles';

// You can add getColor if you need it : https://github.com/vadimdemedes/tailwind-rn#getcolorcolor
const {tailwind} = create({...baseStyleTailwind, ...styles});

export {tailwind};
