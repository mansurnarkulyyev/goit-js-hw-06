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


const getClass = document.querySelector('.gallery');


const makeGalleryImg = ({ url, alt } = {}) => {
  const imagesList = document.createElement('li');
  imagesList.classList.add('img-list');

  const imagesLink = document.createElement('a');
  imagesLink.href = '#';
  imagesList.append(imagesLink);

  const imagesListEl = document.createElement('img')
  imagesListEl.src = url;
  imagesListEl.alt = alt;
  imagesListEl.style.width = "350px";
  imagesListEl.style.padding = "10px";


  imagesLink.append(imagesListEl)

  return imagesList;
}

const imgArr = images.map(el => {
  return makeGalleryImg(el)
})

getClass.append(...imgArr);

console.log(imagesGallery);


