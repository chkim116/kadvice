import {
  etcAdviceFixture,
  lifeAdviceFixture,
  motivationAdviceFixture,
} from '@fixtures';
import { KadviceJsonModel, KadviceTagEnum, KadviceTagType } from '../models';

export function getAdviceFixtures(
  tagNumber?: KadviceTagType,
): KadviceJsonModel[] {
  if (tagNumber === KadviceTagEnum.LIFE) {
    return lifeAdviceFixture as KadviceJsonModel[];
  }

  if (tagNumber === KadviceTagEnum.MOTIVATION) {
    return motivationAdviceFixture as KadviceJsonModel[];
  }

  if (tagNumber === KadviceTagEnum.ETC) {
    return etcAdviceFixture as KadviceJsonModel[];
  }

  return [
    ...lifeAdviceFixture,
    ...motivationAdviceFixture,
    ...etcAdviceFixture,
  ] as KadviceJsonModel[];
}
