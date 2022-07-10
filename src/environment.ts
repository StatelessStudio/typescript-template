import { AppConfig, configure } from 'ts-appconfig';

/**
 * Environment Variables Schema
 */
export class Environment extends AppConfig {
	readonly APP_TITLE = 'typescript-template-library';
}

/**
 * Load & export environment variables
 */
export const env: Environment = configure(Environment);
