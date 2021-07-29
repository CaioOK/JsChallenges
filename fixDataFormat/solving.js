const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
];

const correctDataFormat = wrongDataFormat.reduce((acc, colorAndSize) => {
  const [color, size] = colorAndSize.split('-');

  if (!acc[color]) {
    return {...acc, [color]: {[size]: 1}};

  } else if (acc[color][size] >= 1) {
      const quantity = acc[color][size];
      return {...acc, [color]: {...acc[color], [size]: quantity + 1}};

  } else {
    return {...acc, [color]: {...acc[color], [size]: 1}};

  }
}, {});

console.log(correctDataFormat);