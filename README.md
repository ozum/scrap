# Fortibase Scrap

Keeps node module development environment up to date. Installs config files, development dependencies and modifies your package.json file and keeps them updated.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Synopsis](#synopsis)
  - [Installed](#installed)
  - [Non-Installed](#non-installed)
- [Usage](#usage)
- [Commands](#commands)
- [`package.json` Scripts](#packagejson-scripts)
  - [For projects](#for-projects)
  - [For Internal Use](#for-internal-use)
- [Files](#files)
- [Packages Used](#packages-used)
  - [Commitizen](#commitizen)
  - [Commit Lint & Standard Version](#commit-lint--standard-version)
  - [Husky](#husky)
  - [Lint Staged](#lint-staged)
  - [Documentation](#documentation)
    - [TypeDoc](#typedoc)
    - [VuePress](#vuepress)
  - [Notes](#notes)
    - [.npmignore (or lack of)](#npmignore-or-lack-of)
- [Development](#development)
  - [File Locations](#file-locations)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Synopsis

## Installed

```bash
$ npm install -D @fortibase/scrap
```

`postinstall` script executes updates your module and installs necessary scripts. From now on, just update `moe-scripts`
to update all `devDependencies`.

## Non-Installed

```
$ npx @fortibase/scrap update --features vuepress
$ npx @fortibase/scrap uninstall
```

# Usage

<!-- usage -->

```sh-session
$ npm install -g @fortibase/scrap
$ scrap COMMAND
running command...
$ scrap (-v|--version|version)
@fortibase/scrap/0.0.50 darwin-x64 node-v12.4.0
$ scrap --help [COMMAND]
USAGE
  $ scrap COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`scrap help [COMMAND]`](#scrap-help-command)
- [`scrap uninstall`](#scrap-uninstall)
- [`scrap update`](#scrap-update)

## `scrap help [COMMAND]`

display help for scrap

```
USAGE
  $ scrap help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `scrap uninstall`

Uninstall files and configuration added previously.

```
USAGE
  $ scrap uninstall

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ @fortibase/scrap uninstall
```

_See code: [dist/commands/uninstall.js](https://github.com/ozum/scrap/blob/v0.0.50/dist/commands/uninstall.js)_

## `scrap update`

Updates node module development environment by adding configuration files installing development dependencies and modifying 'package.json' file.

```
USAGE
  $ scrap update

OPTIONS
  -d, --addDependencies    Add dependencies to 'package.json'
  -f, --features=features  (CSV) Features to add. ('vuepress')
  -h, --help               show CLI help

EXAMPLES
  $ @fortibase/scrap update
  $ @fortibase/scrap update --features vuepress
```

_See code: [dist/commands/update.js](https://github.com/ozum/scrap/blob/v0.0.50/dist/commands/update.js)_

<!-- commandsstop -->

# `package.json` Scripts

## For projects

| Script              | Description                                                                                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `build`             | Builds project using TypeScript.                                                                                                                                                                                               |
| `commit`            | Commits staged files using [commitizen](https://github.com/commitizen/cz-cli) and [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) commits files with a preferred format.                  |
| `commit:add`        | Stages and commits all changed files and commits them using [commitizen](https://github.com/commitizen/cz-cli) and [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)                        |
| `docs:build`        | Builds VuePress web site for production. Should be used by [netlify](https://www.netlify.com/) during build step in their servers.                                                                                             |
| `docs:dev`          | Starts [VuePress](https://vuepress.vuejs.org/) development web site. Note: TypeDoc docs should be updated manually using `npm run typedoc:html` and `npm run typedoc:md` during development when TypeDoc comments are updated. |
| `format`            | Formats source codes.                                                                                                                                                                                                          |
| `lint`              | Lints source codes and auto fixes when possible.                                                                                                                                                                               |
| `readme`            | Updates `README.md` file using [readmeasy](https://www.npmjs.com/package/readmeasy).                                                                                                                                           |
| `release`           | Adds changed files to git, pushes source code to git repository and publishes to npm after validating (test & lint etc.) source code, updating README.                                                                         |
| `test`              | Test project                                                                                                                                                                                                                   |
| `test:watch`        | Watches for file changes and re-runs tests.                                                                                                                                                                                    |
| `typedoc:html`      | Generates TypeDoc HTML documentation web site into `api-docs-html` directory.                                                                                                                                                  |
| `typedoc:md`        | Generates VuePress compatible Markdown files from TypeDoc comments into `api-docs-md` directory.                                                                                                                               |
| `typedoc:single-md` | Generates Markdown files from TypeDoc and concatenates them into `api.md` file.                                                                                                                                                |
| `validate`          | Lints and tests source code.                                                                                                                                                                                                   |

## For Internal Use

| Script                | Description                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `postinstall`         | Runs update script after this module is installed into target project.                                                                                                               |
| `postpack`            | Required by [oclif](https://oclif.io/) CLI framework.                                                                                                                                |
| `postreadme`          | Inserts [oclif](https://oclif.io/) documenatition into `README.md` after `README.md` is generated by [readmeasy](https://www.npmjs.com/package/readmeasy).                           |
| `prepack`             | Required by [oclif](https://oclif.io/) CLI framework.                                                                                                                                |
| **`update-packages`** | Updates `package.json` files in `module-files/package-json` directory like `npm update`. Also informs if it founds difference between _**wanted version**_ and _**latest version**_. |

# Files

| Files                  | Related                                                                                                                                  | Description                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `.czrc`                | [commitizen](https://github.com/commitizen/cz-cli), [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) | Config and adapter settings for commitizen.                                     |
| `.commitlintrc`        | [@commitlint/cli & @commitlint/config-conventional](https://github.com/conventional-changelog/commitlint)                                | Config and adapter settings for commitlint.                                     |
| `.editorconfig`        | [EditorConfig](https://editorconfig.org/)                                                                                                | Config for defining coding styles that enable editors adhere to defined styles. |
| `.eslintignore`        | [ESLint](https://eslint.org/)                                                                                                            | List of paths to be ignored by eslint.                                          |
| `.eslintrc.js`         | [ESLint](https://eslint.org/)                                                                                                            | Configuration for eslint.                                                       |
| `.gitattributes`       | [.gitattributes](https://git-scm.com/docs/gitattributes)                                                                                 | File that gives Git attributes to pathnames.                                    |
| `.gitignore`           | [.gitignore](https://git-scm.com/docs/gitignore)                                                                                         | File which specifies intentionally untracked files that Git should ignore.      |
| `.huskyrc`             | [husky](https://github.com/typicode/husky)                                                                                               | Config to define what would be executed at each git stage.                      |
| `.lintstagedrc`        | [lint-staged](https://github.com/okonet/lint-staged)                                                                                     | Config to define what should be done each type of changed files.                |
| `.mode-scriptsrc.json` |                                                                                                                                          | Config for this module.                                                         |
| `.prettierrc`          | [prettier](https://prettier.io/)                                                                                                         | Config for prettier code formatter.                                             |
| `.jest.config.json`    | [jest](https://jestjs.io/)                                                                                                               | Config for Jest testing framework.                                              |
| `README.njk`           | [readmeasy](https://www.npmjs.com/package/readmeasy)                                                                                     | Template file for `README.md`                                                   |
| `tsconfig.json`        | [tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)                                                              | Config for TypeScript                                                           |

# Packages Used

## Commitizen

Packages: [commitizen](https://github.com/commitizen/cz-cli), [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

![images](images/commitizen-cli.png)

## Commit Lint & Standard Version

Packages: [@commitlint/cli & @commitlint/config-conventional](https://github.com/conventional-changelog/commitlint), [standard-version](https://github.com/conventional-changelog/standard-version),

commitlint checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org/).

**Standard Version**: Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org

**Commitlint**: Checks if your commit messages meet the conventional commit format.

#### First Release

`standard-version --first-release` will tag a release without bumping the version

`standard-version` will tag a release and bump the version

## Husky

Packages: [husky](https://github.com/typicode/husky)

Git hooks made easy. Husky can prevent bad git commit, git push and more. It is used here to execute

- `lint-staged` at `precommit`,
- `commitlint` at `commit-msg`,
- `commitizen` at `prepare-commit-msg` (currently disabled, see [this issue](https://github.com/commitizen/cz-cli/issues/558#event-2490437059))

## Lint Staged

Packages: [lint-staged](https://github.com/okonet/lint-staged)

Run linters against staged git files, so non-changed files are excluded from linters.

| File Type                | What                 |
| ------------------------ | -------------------- |
| `js`, `ts`               | Lint, test, coverage |
| `json`, `md`, `css` etc. | Format               |
| `rc`, `json`             | Lint                 |

## Documentation

### TypeDoc

[TypeDoc](https://typedoc.org/) TypeDoc converts comments in TypeScript source code into rendered HTML documentation. Also it is possible to create multiple Markdown files using
[typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) plugin. Using [concat-md](https://www.npmjs.com/package/concat-md) it is possible to create single
Markdown file.

### VuePress

[VuePress](https://vuepress.vuejs.org/) is used to create documentation web sites. [vuepress-bar](https://www.npmjs.com/package/vuepress-bar) is used to generate VuePress menu.
Also [TypeDoc](https://typedoc.org/) HTML and [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown) generated API docs is included in VuePress site.

Netlify may be used to publish documentation.

## Notes

### .npmignore (or lack of)

`.npmignore` is not used, because this file overrides `.gitignore` and may results unpredictable behavior. Instead of using a blacklist for node modules, it is safer to write
whitelisted files to be published in `files` key in `package.json`.

# Development

## File Locations

Fİles are grouped after `feature` names in `module-files` directory. `common` are included always and others are included if requested
with `-f` flag i.e. (`-f vuepress`)

| File Location                                           | Description                                                                                                                                                                                                                                           |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/commands`                                          | [oclif](https://oclif.io/) commands                                                                                                                                                                                                                   |
| `module-files/files/[feature name]/dont-overwrite`      | Files to be copied if they don't exist in target project.                                                                                                                                                                                             |
| `module-files/files/[feature name]/overwrite`           | Files to be copied and overwritten even they exist in target project. Also those are deleted during uninstall.                                                                                                                                        |
| `module-files/package-json/[feature name]/package.json` | `package.json` entries to be added to target project's `package.json`. They are `nunjucks` templates which are passed { intermodular: [intermodular](https://intermodular.ozum.net/), path: [path module](https://nodejs.org/api/path.html) } object. |

`package.json` entries are merged and added to target project's `package.json`. Also changes made by this project is tracked `@fortibase/scrapModifications` key in target project's `package.json`.
