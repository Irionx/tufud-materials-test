### Tufud Material Components


### <tf-header></tf-header>
- **Input quantity: number | undefined** Output quantityEmitter
- **Input cartIcon: boolean** (show/hide cart button | default: true)
- **Input shoppingCartAmount: string**
- **Input header** (menu list with options and routes added as array of {name:string, route:string}) 
- **Input usernameboxDisabled: boolean**
- **Output openCartEmit** (cart empty emmit) 
- **Output logoutEmit** (logout button empty emmit) *Output() routeLink = new EventEmitter() *mandatory, emits route string. Use a method with route.navigate([event])


###  <tf-pagination>
- **Input pageSize: number** 
- **Input length: number**
- **Input pageIndex: number**
- **Input itemsQuantity: number**
- **Output page = new EventEmitter()**

### <tf-minus-plus>
### <tf-table-layout>

---
#### **Requirements:**
`import { TufudMaterialLibraryModule } from 'tufud-material';`

**<tf-header>** needs to have this in the project to work: 
`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`
 also needed for testing the lib. If you add it in the lib module remove it before build

**<tf-footer>** needs to add the resource path of the library in the angular.json of the application:
```
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "node_modules/tufud-material/assets",
    "output": "tfassets"
  }
],
```

<tf-footer>
You need to add the resource path of the library in the angular.json of the application:
            
    "assets": [
      "src/favicon.ico",
      "src/assets",
      {
        "glob": "**/*",
        "input": "node_modules/tufud-material/assets",
        "output": "tfassets"
      }
    ],

## Code scaffolding

Run `ng generate component component-name --project tufud-material` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project tufud-material`.
> Note: Don't forget to add `--project tufud-material` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build tufud-material` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build tufud-material`, go to the dist folder `cd dist/tufud-material` and run `npm publish`.

