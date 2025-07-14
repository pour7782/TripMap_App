import React, { createContext, useContext, useState } from 'react';

// 초기 더미 리뷰 데이터
const initialReviews = [
  {
    id: '1',
    user: '사용자1',
    title: '제주 여행 추천',
    hashtag: '#휴식 #맛집',
    region: "제주",
    profileImage: require('../../assets/images.png'),
    body: "제주도에서 가장 추천하는 맛집이에요!",
    pros: "힐링 가능",
    cons: "조금 비쌈",
    conclusion: "추천합니다",
    photos: [require('../../assets/food.png')],
  },
  {
    id: '2',
    user: '사용자2',
    title: '서귀포 코스',
    hashtag: '#자연 #힐링',
    region: "서귀포",
    profileImage: require('../../assets/images.png'),
    body: "자연 느낄 수 있는 코스",
    pros: "자연 만끽",
    cons: "조금 불편함",
    conclusion: "추천",
    photos: [require('../../assets/seogwipo.jpg')],
  },
  
];

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(initialReviews);

  const updateReview = (id, updatedData) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, ...updatedData } : review
      )
    );
  };

  const removeReview = (id) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  const addReview = (newReview) => {
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <ReviewContext.Provider
      value={{ reviews, updateReview, removeReview, addReview }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => useContext(ReviewContext);
