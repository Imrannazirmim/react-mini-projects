import React, { useState } from 'react';

const testiminoials = [
  {
    author: {
      name: 'John Doe',
      designation: 'Software Engineer',
      company: 'TechCorp',
    },
    message:
      'This product has significantly improved our workflow efficiency. Highly recommended!',
    rating: 5,
    date: '2025-02-08',
  },
  {
    author: {
      name: 'Jane Smith',
      designation: 'Product Manager',
      company: 'InnovateX',
    },
    message:
      'A game-changer for our team. The user-friendly interface makes it a joy to use.',
    rating: 4.5,
    date: '2025-02-07',
  },
  {
    author: {
      name: 'Michael Johnson',
      designation: 'CEO',
      company: 'StartupHub',
    },
    message: 'An essential tool for any business looking to scale efficiently.',
    rating: 5,
    date: '2025-02-06',
  },
  {
    author: {
      name: 'Emily Davis',
      designation: 'UX Designer',
      company: 'CreativeSolutions',
    },
    message:
      'I love the design and ease of use. It has improved our collaboration process tremendously.',
    rating: 4.8,
    date: '2025-02-05',
  },
  {
    author: {
      name: 'David Wilson',
      designation: 'Data Analyst',
      company: 'DataPros',
    },
    message:
      'Accurate analytics and insightful reports. A must-have for data-driven decision making.',
    rating: 4.7,
    date: '2025-02-04',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testiminoials.length - 1) % testiminoials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testiminoials.length);
  };
  return (
    <section className="m-4 p-3 flex justify-center items-center  w-full h-screen">
      <div className="w-[30rem] h-[20rem] flex flex-col justify-center items-center gap-4 bg-blue-400 text-center m-2 p-3 rounded-2xl">
        <div>{testiminoials[currentIndex].author.name}</div>
        <div>{testiminoials[currentIndex].author.company}</div>
        <div>{testiminoials[currentIndex].author.designation}</div>
        <div>{testiminoials[currentIndex].message}</div>
        <div>{testiminoials[currentIndex].rating}</div>
        <div>{testiminoials[currentIndex].date}</div>
      </div>
      <div>
        <button
          onClick={handlePrevClick}
          className="bg-slate-600 px-4 py-2 rounded m-1 text-white"
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className="bg-slate-600 px-4 py-2 rounded m-1 text-white"
        >
          Next
        </button>
      </div>
    </section>
  );
};
export default Testimonials;
