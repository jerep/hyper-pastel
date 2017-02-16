const foregroundColor = '#c7c7c7';
const backgroundColor = '#000';
const borderColor     = '#333';

const colors = {
  black:        '#626262',
  red:          '#ff8373',
  green:        '#b4fb73',
  yellow:       '#fffdc3',
  blue:         '#a5d5fe',
  magenta:      '#ff90fe',
  cyan:         '#d1d1fe',
  white:        '#f1f1f1',
  lightBlack:   '#8f8f8f',
  lightRed:     '#ffc4be',
  lightGreen:   '#d6fcba',
  lightYellow:  '#fffed5',
  lightBlue:    '#c2e3ff',
  lightMagenta: '#ffb2fe',
  lightCyan:    '#e6e7fe',
  lightWhite:   '#ffffff'
};

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    colors
  });
};
