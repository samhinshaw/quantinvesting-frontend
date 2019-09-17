import { stringLitArray } from '../utils/string-array-type';
import { LIGHT_GRAY } from '../../src/style-guide/colors.const';

export const statuses = stringLitArray(['success', 'warning', 'danger', 'info']);
export type Status = (typeof statuses)[number];

type FillColorMap = { [key in Status | 'default']: string };

export const fillColors: FillColorMap = {
  danger: '#F4A4A4',
  success: '#9FDFBA',
  info: '', // TODO: an info color
  warning: '', // TODO: a warning color
  default: LIGHT_GRAY,
};
