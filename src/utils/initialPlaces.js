const imeretinkaImage = new URL('../images/photos/imeretinka.webp', import.meta.url);
const krasnayaPolyanaImage = new URL('../images/photos/krasnaya-polyana.webp', import.meta.url);
const ordzhonikidzeImage = new URL('../images/photos/ordzhonikidze.webp', import.meta.url);
const khostaImage = new URL('../images/photos/khosta.webp', import.meta.url);
const dendrariyImage = new URL('../images/photos/dendrariy.webp', import.meta.url);
const rosaKhutorImage = new URL('../images/photos/rosa-khutor.webp', import.meta.url);

export const initialPlaces = [
  {
    name: 'Имеретинcкая низменность',
    link: imeretinkaImage,
  },
  {
    name: 'Красная Поляна',
    link: krasnayaPolyanaImage,
  },
    {
    name: 'Орджоникидзе',
    link: ordzhonikidzeImage,
  },
  {
    name: 'Хоста',
    link: khostaImage,
  },
  {
    name: 'Дендрарий',
    link: dendrariyImage,
  },
  {
    name: 'Роза Хутор',
    link: rosaKhutorImage,
  }
]