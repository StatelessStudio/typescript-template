# Typescript Project Template

## [v1.1.0] - Jan-13-2021

### Additions

- Updated documentation for easier installation
- Add webpack build chain
- Add source mapping

### Fixes

- Move `main.ts` to `index.ts` to better meet node standard & to allow loading by directory with implicit entrypoint
- Max-line-length should be warning, not error
- [TSTEMPLATE-2] Environment doesn't infer type of export 'env'

## [v1.0.0] - Oct-15-2020

### Breaking Changes

- Switched from tslint to eslint due to deprecation

### Additions

- Add `npm start` script
- Add code coverage reporting and coveralls configuration
- Add additional prod linting

### Fixes

- Cleanup prettier config
- Added unit tests for untested code
- Linting should automatically fix
- Update readme code samples
- Add ts-project-version to package.json for version control
- Don't build on prepare hook

## [v0.0.0] - Oct-09-2020 - Initial Release

Initial Release