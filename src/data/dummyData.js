// src/data/coursesData.js

import course1 from "../Assets/Rectangle 1.png";
import course2 from "../Assets/Rectangle 15 (2).png";
import course3 from "../Assets/Rectangle 3.png";
import course4 from "../Assets/Rectangle 1.png";
import course5 from "../Assets/Rectangle 15 (2).png";
import course6 from "../Assets/Rectangle 3.png";


export const platforms = [
  { id: 1, name: 'Will Courses', logo: '🚀' },
  { id: 2, name: 'Gdemy', logo: '🎓' },
  { id: 3, name: 'Khan Academy', logo: '📚' },
  { id: 4, name: 'cloud academy', logo: '☁️' },
  { id: 5, name: 'COURS67G', logo: '💻' }
];

export const popularCourses = [
  {
    id: 1,
    title: "Unconscious Bias",
    image: course1,
    duration: "25 mins",
    price: "15.90",
    isFree: true,
    bestSeller: true,
    platform: "Cloud Academy",
    reviews: "43,435",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Communication",
    image: course2,
    duration: "50 mins",
    price: "15.90",
    isFree: false,
    bestSeller: true,
    platform: "Khan Academy",
    reviews: "30,435",
    rating: 4.7,
  },
  {
    id: 3,
    title: "Critical Thinking",
    image: course3,
    duration: "1 hour 12 mins",
    price: "10.90",
    isFree: false,
    bestSeller: false,
    platform: "Khan Academy",
    reviews: "28,435",
    rating: 4.6,
  },
  {
    id: 4,
    title: "Team Work",
    image: course4,
    duration: "25 mins",
    price: "19.90",
    isFree: false,
    bestSeller: true,
    platform: "Cloud Academy",
    reviews: "24,510",
    rating: 4.8,
  },
  {
    id: 5,
    title: "Leadership Skills",
    image: course5,
    duration: "50 mins",
    price: "18.90",
    isFree: false,
    bestSeller: true,
    platform: "Khan Academy",
    reviews: "18,335",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Statistics",
    image: course6,
    duration: "1 hour 12 mins",
    price: "10.90",
    isFree: false,
    bestSeller: true,
    platform: "Khan Academy",
    reviews: "12,434",
    rating: 4.7,
  },
];
