export class ThemeConfig {
  static primaryColor = '#ffffff';
  static backgroundColor = '#404040';
  static displayAreaBorderRadius = 30;
  static displayAreaPadding = 15;
  static displayContentBorderRadius = 20;
  static spacing = 8;
  
  static bigDropShadow = '0px 4px 10px rgba(0, 0, 0, 0.25), 0px 8px 30px rgba(0, 0, 0, 0.35)';
  static midDropShadow = '0px 3px 7px rgba(0, 0, 0, 0.2), 0px 6px 20px rgba(0, 0, 0, 0.3)';

  static get headerFontSize() {
    return ThemeConfig.fontSize * 1.5;
  }
}