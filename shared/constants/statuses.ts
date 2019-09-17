import { stringLitArray } from '../utils/string-array-type';

export const statuses = stringLitArray(['success', 'warning', 'danger', 'info']);
export type Status = (typeof statuses)[number];

type FillColorMap = { [key in Status]: string };

export const fillColors: FillColorMap = {
  danger: '#F4A4A4',
  success: '#9FDFBA',
  info: '', // TODO: an info color
  warning: '' // TODO: a warning color
};
