import { TComboboxItem } from '@udecode/plate-combobox';

export type MentionData = TComboboxItem & { data: any };
export const MENTIONABLES: MentionData[] = [
  {
    key: '111',
    text: 'Tristan',
    data: {
      uid: 12,
    },
  },
  {
    key: '112',
    text: 'Su Han',
    data: {
      uid: 1,
    },
  },
  {
    key: '1123',
    text: 'Shuo Tong',
    data: {
      uid: 2,
    },
  },
  {
    key: '123',
    text: 'Jack Ma',
    data: {
      uid: 333,
    },
  },
  {
    key: '213',
    text: 'Great Man',
    data: {
      uid: 23,
    },
  },
];
