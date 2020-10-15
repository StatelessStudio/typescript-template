import { logger } from './logger';
import { env } from './environment';

async function main() {
	logger.info('Hello ' + env.APP_TITLE);
}
main();
