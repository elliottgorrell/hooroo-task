const style = {
  resultsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto',
    gridColumnGap: '10px',
    gridRowGap: '15px',
  },
  result: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'auto',
  },
  resultImage: {
    gridColumn: 'span 4',
    objectFit: 'contain',
    width: '100%',
  },
  resultInfo: {
    gridColumn: 'span 8',
  },
};

module.exports = style;
