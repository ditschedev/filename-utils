import { getExtension, getBaseName } from '../src/index';

describe('getExtension() function', () => {
  it('should extract extension from standard filename', () => {
    expect(getExtension('image.png')).toEqual('png');
  });
  it('should extract extension from double dotted filename', () => {
    expect(getExtension('image.test.png')).toEqual('png');
  });
  it('should extract extension from dotted filename', () => {
    expect(getExtension('i.am.a.image.png')).toEqual('png');
  });
  it('should return empty string for no extensions', () => {
    expect(getExtension('file')).toEqual('');
  });
  it('should return empty string for files starting with a dot', () => {
    expect(getExtension('.htaccess')).toEqual('');
  });
});

describe('getBaseName() function', () => {

  it('should return the base name of a default filename', () => {
    expect(getBaseName('image-203923.jpeg')).toEqual('image-203923');
  });

  it('should return the base name of a file with no extension', () => {
    expect(getBaseName('buildscript')).toEqual('buildscript');
  });

  it('should return the base name of a file starting with a dot', () => {
    expect(getBaseName('.env')).toEqual('.env');
  });

});