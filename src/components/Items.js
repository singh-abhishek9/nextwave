import React, {useState} from 'react'

import image1 from '../assets/ai-generated-8288689_1280.png'
import image2 from '../assets/file-1293984_1280.png'
import image3 from '../assets/javascript-2189147_1280.png'
import image4 from '../assets/just-2020934_1280.png'
import image5 from '../assets/old-books-436498_1280.jpg'
import image6  from '../assets/vintage-1064142_1280.png'
const slides = [
  { className: 'Chemistry 9 to 12', faculty: '15 faculty members', image: image1 },
  { className: 'Maths 9 to 12', faculty: '14 faculty members', image: image2 },
  { className: 'BioLogy 9 to 12', faculty: '26 faculty members', image: image3 },
  { className: 'Physics 9 to 12', faculty: '17 faculty members', image: image4 },
  { className: 'Hindi 9 to 12', faculty: '25 faculty members', image: image5 },
  { className: 'English 9 to 12', faculty: '26 faculty members', image: image6 },
  { className: 'Java 9 to 12', faculty: '35 faculty members', image: image1 },
  { className: 'Python 9 to 12', faculty: '34 faculty members', image: image2 }
];
export default function Items() {

          const [currentIndex, setCurrentIndex] = useState(0);
          const slidesToShow = 4;
        
          const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - slidesToShow : prevIndex - 1));
          };
        
          const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - slidesToShow ? 0 : prevIndex + 1));
          };
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[80%] max-w-5xl">
        <div className="flex items-center w-full px-8">
          <button
            onClick={prevSlide}
            className="absolute left-20 w-7 h-7 bg-blue-500 text-white rounded-full transform -translate-y-1/2 top-1/2 z-10"
          >
            ←
          </button>
          <div className="flex space-x-4 overflow-hidden w-full justify-center">
            {slides.slice(currentIndex, currentIndex + slidesToShow).map((slide, index) => (
              <div key={index} className="flex flex-col items-center p-2 border border-gray-300 rounded-lg bg-white w-1/5 hover:bg-blue-500">
                <div className="rounded-full border-4 border-pink-500 overflow-hidden w-20 h-20">
                  <img src={slide.image} alt={slide.className} className="w-full h-full object-cover" />
                </div>
                <p className="mt-2 text-lg font-semibold">{slide.className}</p>
                <p className="text-gray-600">{slide.faculty}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-20  w-7 h-7 bg-blue-500 text-white rounded-full  transform -translate-y-1/2 top-1/2 z-10"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
