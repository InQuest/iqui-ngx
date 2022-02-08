# InQuest Angular UI Library

IQUI Elements is based on [Bootstrap](https://getbootstrap.com/) and has it's functionality implemented via [Angular CDK](https://material.angular.io/cdk/categories).

See live documentation here: [GitHub Pages](https://inquest.github.io/iqui-ngx/)

## Usage

Since IQUI-NGX is built on top of [Bootstrap](https://getbootstrap.com/) and [Angular CDK](https://material.angular.io/cdk/categories), any project importing and using the IQUI Elements Library, needs to also include the following SCSS files:

```scss
// Bootstrap style imports
@import '~/node_modules/bootstrap/scss/bootstrap';
// Import angular CDK structural styling
@import '../../../node_modules/@angular/cdk/overlay-prebuilt.css';
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Contributing

### Reporting Issues

When reporting issues, please keep to provided templates.

Before reporting issues, please read: [GitHub Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/github.md)

### Contributing Code

For work-flow and general etiquette when contributing, please see:

- [Git Source-Control Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/git.md)
- [GitHub Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/github.md)
- [Angular Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/angular.md)

Please accompany any work, fix or feature with their own issue, in it's own branch (see [Git Source-Control Work-Flow](https://github.com/ofzza/onboarding/blob/master/CONTRIBUTING/git.md) for branch naming conventions), and once done, request merge via pull request.

When creating issues and PRs, please keep to provided templates.
