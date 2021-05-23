const computeIndexCh = ({ shift, indexCh }) => {
  const correctShift = Math.abs(shift) > 26 ? shift % 26 : shift;

  switch (true) {
    case (correctShift + indexCh > 25) :
      return correctShift + indexCh - 26;

    case (correctShift + indexCh < 0) :
      return correctShift + indexCh + 26;

    default :
      return correctShift + indexCh;
  }
}

module.exports.onCrypto = ({ shift, str, action }) => {
  const arrChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const newStr = str.split('');

  const result = newStr.map(ch => {
    const indexCh = arrChar.indexOf(ch.toLowerCase());

    if (indexCh === -1) {
      return ch;
    }

    const newIndexCh = action === 'encode' ?
      computeIndexCh({ shift, indexCh }) :
      computeIndexCh({ shift: -shift, indexCh });

    const newCh = arrChar[newIndexCh];

    return ch === ch.toUpperCase() ? newCh.toUpperCase() : newCh;
  });

  return result.join('') + '\n';
};
