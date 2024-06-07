module.exports = function calculateNumber(a, b = 0) {
    const j = Number(b);
    const i = Number(a);
  
    if (Number.isNaN(i) || Number.isNaN(j))
      throw TypeError('Parameters must be numbers');
  
    return Math.round(i) + Math.round(j);
  };
