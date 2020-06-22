// function greetings() {
//   console.log('Hello world');
// }

// function sayname() {
//   setTimeout(() => {
//     console.log('My name is favour');
//   }, 2000);
// }

// function finalGreet() {
//   greetings();
//   sayname();

//   console.log('Javascript is interesting');
// }

// finalGreet();

const fs = require('fs');

// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   fs.writeFile('./write.txt', data, err => {
//     if (err) console.log(err);
//     console.log('success');
//     fs.readFile('./write.txt', 'utf-8', (err, data) => {});
//   });
// });

const fileReader = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const fileWriter = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(err);
      resolve('success..');
    });
  });
};

// fileReader('./rdjdfnf[-ead.txt')
//   .then(result => {
//     console.log(result);
//     return fileWriter('./example2.txt', result);
//   })
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// const data1 = 'I am changing the values here and ...';

// fileWriter('./read.txt', data1)
//   .then(result => {
//     return fileReader('./read.txt');
//   })
//   .then(response => console.log(response));

const fileSystem = async () => {
  try {
    let readme = await fileReader('./example2.txt');
    // console.log(readme);
    let writeme = await fileWriter('./read.txt', readme);
    console.log(writeme);
  } catch (error) {
    console.log(error);
  }
};

fileSystem();
