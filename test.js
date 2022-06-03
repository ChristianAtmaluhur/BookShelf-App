const arr = [
  {
    name: 'satu',
    reading: false,
  },
  {
    name: 'dua',
    reading: true,
  },
  {
    name: 'tiga',
    reading: true,
  },
  {
    name: 'empat',
    reading: false,
  },
];

const filterArr = arr.filter((a) => !a.reading);

console.log(filterArr);
