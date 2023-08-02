import { KadviceService } from './KadviceService';
import { getKadviceStorageService } from './KadviceStorageService';
import { getAdviceFixtures } from './utils/getAdviceFixture';

function getKadviceService() {
  let instance: KadviceService | null = null;

  if (instance) {
    return instance;
  }

  instance = new KadviceService(
    getAdviceFixtures(),
    getKadviceStorageService(),
  );

  return instance;
}

export const kadvice = getKadviceService();
export * from './models';
