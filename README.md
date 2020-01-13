# IQUI Elements Library

IQUI Elements styling is based on [Bootstrap](https://getbootstrap.com/) but has it's functionality implemented via [Angular CDK](https://material.angular.io/cdk/categories).
As a consequence, any project importing and using the IQUI Elements Library, needs to also include the following SCSS files:
```scss
// Bootstrap style imports
@import "~/bootstrap/scss/bootstrap";
// Import angular CDK structural styling
@import '~/@angular/cdk/overlay-prebuilt.css';
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
