import {create} from 'tailwind-rn';
import styles from '../../../../styles.json';

// You can add getColor if you need it : https://github.com/vadimdemedes/tailwind-rn#getcolorcolor
const {tailwind} = create(styles);

export {tailwind};
