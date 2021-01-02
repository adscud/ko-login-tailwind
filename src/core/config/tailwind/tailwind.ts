import {create} from 'tailwind-rn';
import {default as baseStyleTailwind} from 'tailwind-rn/styles.json';
import styles from './styles';

const {tailwind, getColor} = create({...baseStyleTailwind, ...styles});

export {tailwind};
