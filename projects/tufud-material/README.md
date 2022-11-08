# TufudMaterial

import { TufudMaterialLibraryModule } from 'tufud-material';

<tf-minus-plus> 
Input quantity: number | undefined
Output quantityEmitter

<tf-header>
Input cartIcon: boolean (show hide cart button)
Input shoppingCartAmount: string;
Input header  (menu list with options and routes added as array of {name:string,
                route:string})
Input usernameboxDisabled: boolean;
Output openCartEmit (cart empty emmit)
Output logoutEmit (logout button empty emmit)

header need to have this in the project to work:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
also is needed for testing the lib so add it in the lib module and remove it before build

<tf-pagination>
  Input pageSize: number;
  Input length: number;
  Input pageIndex: number;
  Input itemsQuantity: number;
  Output page = new EventEmitter<any>();

## Code scaffolding

Run `ng generate component component-name --project tufud-material` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project tufud-material`.
> Note: Don't forget to add `--project tufud-material` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build tufud-material` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build tufud-material`, go to the dist folder `cd dist/tufud-material` and run `npm publish`.

