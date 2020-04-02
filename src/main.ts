import { WoodCutter } from 'woodcutter';

function main(): void {
  const logger = new WoodCutter();
  logger.info('Welcome');
  logger.error('Test');
}

main();
