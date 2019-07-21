# Fortibase Scrap





<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Usage](#usage)
- [Commands](#commands)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# Usage

<!-- usage -->
```sh-session
$ npm install -g @fortibase/scrap
$ scrap COMMAND
running command...
$ scrap (-v|--version|version)
@fortibase/scrap/0.0.36 darwin-x64 node-v12.4.0
$ scrap --help [COMMAND]
USAGE
  $ scrap COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`scrap help [COMMAND]`](#scrap-help-command)
* [`scrap uninstall`](#scrap-uninstall)
* [`scrap update`](#scrap-update)

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

Uninstall module project

```
USAGE
  $ scrap uninstall

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ scrap uninstall
  hello world from ./src/hello.ts!
```

_See code: [dist/commands/uninstall.js](https://github.com/ozum/scrap/blob/v0.0.36/dist/commands/uninstall.js)_

## `scrap update`

Updates project by adding configuration files and updating 'package.json' file.

```
USAGE
  $ scrap update

OPTIONS
  -d, --addDependencies    Add dependencies to 'package.json'
  -f, --features=features  (CSV) Features to add
  -h, --help               show CLI help

EXAMPLE
  $ scrap update
  hello world from ./src/hello.ts!
```

_See code: [dist/commands/update.js](https://github.com/ozum/scrap/blob/v0.0.36/dist/commands/update.js)_
<!-- commandsstop -->
