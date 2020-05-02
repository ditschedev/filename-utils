# filename-utils
A tiny module written in TypeScript to help you with your filenames. A JavaScript version of the Apache FilenameUtils
class.

## Installation
To install the module, use your preferred package manager.
```yarn
yarn add filename-utils
```
or use npm
```npm
npm install filename-utils
```

## Usage
First you need to import the functions you need from `filename-utils`.
```typescript
import { getExtension, getBaseName } from 'filename-utils';
```
After that you can use the functions as you'd like!.

#### `getExtension(filename: string): string`
Fetches the extension of a filename. Will return an empty string, if no filename can be resolved. Examples:
```typescript
getExtension('image.png'); // returns => "png"
getExtension('image.test.jpeg'); // returns => "jpeg"
getExtension('shellscript'); // returns => ""
getExtension('.htaccess'); // returns => ""
```

#### `getBaseName(filename: string): string`
Strips the extension off the filename and returns the base name.
```typescript
getBaseName('image.png'); // returns => "image"
getBaseName('image.test.jpeg'); // returns => "image.test"
getBaseName('file'); // returns => "file"
getBaseName('.env'); // returns => ""
```