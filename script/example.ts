import { env } from '../src/environment';

/**
 * Do something!
 */
export async function example(): Promise<void> {
	console.log('App Name: ', env.APP_TITLE);
	console.log('Environment: ', env.NODE_ENV);
}

example().catch(console.error);
