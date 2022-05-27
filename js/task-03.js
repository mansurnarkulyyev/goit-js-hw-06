const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEL = document.querySelector('.gallery');
const makeGalleryCard = ({ url, alt } = {}) => {
  return `<li class="gallery-item">
    <img src="${url}" alt="${alt}" width="300px"  >
</li>`;
};

const imgArr = images.map(el => {
  return makeGalleryCard(el);
});
// console.log(imgArr);
galleryEL.insertAdjacentHTML('afterbegin', imgArr.join(''));
// galleryEL.innerHTML = cardsArr.join('');









// const imgGallery = document.querySelector('.gallery');
// ********

// const getId = document.querySelector('.gallery');


// for (let element of images) {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.classList.add('img-list');
//   const imgEl = document.createElement('img');
//   imgEl.src = element.url
//   imgEl.alt = element.alt
//   imgEl.style.width = '300px'
//   ingredientsItem.append(imgEl)
//   getId.append(ingredientsItem);
// }

// console.log(getId);
// *******


// const elements = images.map((el) => {
//   const imagesList = document.createElement('li');
//   imagesList.classList.add('img-list');
//   imgGallery.append(imagesList)

//   const imgEl = document.createElement('img');
//   imgEl.src = el.url
//   imgEl.style.width = '300px'
//   imagesList.append(imgEl)

//   return imgEl
// })

// imgGallery.append(...elements);


