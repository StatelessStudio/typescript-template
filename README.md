# typescript-template

## Installation

1. Create a new empty git repo
	```bash
	mkdir my-project
	cd my-project
	git init .
	```
2. Install the template (Copy this into git bash).
   ```bash
   git remote add template https://github.com/StatelessStudio/typescript-template/ && git pull template master --allow-unrelated-histories && git remote remove template
   ```
3. Replace "typescript-template" with the name of your app project-wide (**No Spaces or special characters except dash!**)
4. `npm i`
5. Update the documentation, changelog, etc

## Pulling updates from typescript-template

1. Run the install command in the installation instructions
2. Resolve merge conflicts
3. Test!

## Development

Run a dev test with `npm start`.

Here's a rundown of where to put your code, see each file for more information:

- **src/environment.ts**: Setup environment variables here
- **src/index.ts**: You don't typically need to edit this file, it just initializes and starts your app.
- **src/log.ts**: This is your project's log, import this file to use the log. You can also extend/replace the log.
- **src/main.ts**: This is the main entrypoint for your application, after services have been registered.
- **src/register.ts**: This file initializes services such as database, SMTP, etc. that are used across different entrypoints of your application.

## Running Tests

To run unit tests, `npm run test`

## Scripts

You can write custom scripts in the `script/` directory. See `script/example.ts` as an example. You should also register your scripts in `package.json`:

```json
{
	...
	"scripts": {
		...
		"admin:example": "ts-node script/example"
	}
}
```

Run your script with `npm run admin:example`

## Compiling

### Debug Builds

To compile a debug build, run `npm run build:dev`. The build output will appear in the `./dist` folder.

### Prod Builds

To compile a production build, run `npm run build:prod`. The build output will appear in the `./dist` folder.

### Clean Builds

To generate a clean build (removes old artifacts and reruns pre&post process scripts), append `:clean` to a build script:
- Debug: `npm run build:dev:clean`
- Release: `npm run build:prod:clean`

## More

### Generating Docs

`npm run doc` and browse docs/index.html!

### Environment Variables

See `src/environment.ts` to see how to use this project's environment variables. Configure an environment in `.env` or with `process.env` (https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processenv).
