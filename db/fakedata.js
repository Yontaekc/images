var faker = require('faker');
let data = [
  {
    id: 1,
    name: "HENRY'S HUNAN",
    picture: [
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry1.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry2.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry3.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry4.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry5.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry6.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry7.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry8.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry9.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry10.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry11.jpg',
      'https://s3-us-west-1.amazonaws.com/nearbyyontek/henry12.jpg'
    ]
  }
];

for (let i = 1; i < 100; i++) {
  let obj = {
    id: i + 1,
    name: faker.name.findName()
  };
  let picArr = [];
  for (let i = 0; i < Math.ceil(Math.random() * 16) + 5; i++) {
    picArr.push(faker.image.food());
  }
  obj.picture = picArr;
  data.push(obj);
}

module.exports = data;
