function isEvenNumber(num) {
    return new Promise((resolve, reject) => {
      if (typeof num === 'number') {
        if (num % 2 === 0) {
          resolve('Even');
        } else {
          resolve('Odd');
        }
      } else {
        reject('Error: Not a number');
      }
    });
  }
  
  isEvenNumber(10).then(result => {
    console.log(result); // Outputs: Even
  }).catch(error => {
    console.log(error);
  });
  