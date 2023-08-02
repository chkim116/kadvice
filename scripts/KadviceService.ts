import {
  KadviceJsonModel,
  KadviceServiceModel,
  KadviceTagType,
} from './models/kadvice.model';
import { KadviceStorageServiceModel } from './KadviceStorageService';

export class KadviceService implements KadviceServiceModel {
  constructor(
    private advices: KadviceJsonModel[],
    private KadviceStorageService: KadviceStorageServiceModel,
  ) {}

  getAll(tagNumber?: KadviceTagType) {
    return this.filter(tagNumber);
  }
  getOne(tagNumber?: KadviceTagType) {
    return this.shuffle(this.getAll(tagNumber));
  }
  getOneByDaily(tagNumber?: KadviceTagType) {
    const advices = this.getAll(tagNumber);
    const index = this.KadviceStorageService.getCurrentAdviceIndex(
      advices.length,
    );

    return advices[index];
  }

  private shuffle(kadviceModels: KadviceJsonModel[]) {
    return kadviceModels[Math.floor(Math.random() * kadviceModels.length)];
  }

  private filter(tagNumber?: number) {
    if (tagNumber) {
      return this.advices.filter(({ tag }) => tag === tagNumber);
    }

    return this.advices;
  }

  /**
   * @deprecated getAll
   */
  get(tagNumber?: KadviceTagType) {
    return this.getAll(tagNumber);
  }
  /**
   * @deprecated getOne
   */
  random(tagNumber?: KadviceTagType) {
    return this.getOne(tagNumber);
  }
  /**
   * @deprecated getOneByDaily
   */
  daily(tagNumber?: KadviceTagType) {
    return this.getOneByDaily(tagNumber);
  }
}
