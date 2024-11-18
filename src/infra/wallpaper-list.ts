import { WallpaperItem } from '@/domain';

import { kimJiseok } from './kimJiseok';
import { chanyeon } from './chanyeon';
import { hyunjin } from './hyunjin';
import { bigOcean } from './bigOcean';

export const wallpaperList: WallpaperItem[] = [
  ...kimJiseok,
  ...chanyeon,
  ...hyunjin,
  ...bigOcean,
];
