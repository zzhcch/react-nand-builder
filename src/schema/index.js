const initGroup = {
  id: '',
  rules: [],
  combinator: 'and',
  isNot: false,
};
const initRule = {
  id: '',
  field: '',
  value: '',
  operator: '==',
};
const root = {
  ...initGroup,
  id: 'root',
};

export { root, initGroup, initRule };
