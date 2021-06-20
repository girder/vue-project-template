# Vue Project Template

This is a project boilerplate template designed for building SPAs that will serve as
front-ends to Girder 4-based servers. The following features are included:

* `vuetify` installation and configuration
* `axios` installation and configuration
* `vue-router` installation and skeleton boilerplate
* Girder 4 OAuth client library installation and configuration
* A home page containing a working OAuth login / logout button
* Sentry integration (if no DSN is provided, this will be inactive)
* Vue composition API shims
* TypeScript
* Best-practice eslint configuration
* GitHub Actions CI that runs tests, lint, and build

## How to use this template

1. Click the button in GitHub that says `Use this template`.

> If you don't want to use GitHub, you can instead clone the repository,
  `rm -rf .git/` in it, and `git init` the copy.

2. After you have your copy, replace occurrences of `CHANGEME` in the codebase.

```bash
git grep CHANGEME
```
