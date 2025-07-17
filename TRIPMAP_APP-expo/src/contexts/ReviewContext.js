import { createContext, useContext, useState } from 'react';

// 초기 더미 리뷰 데이터
const initialReviews = [
  {
    id: '0',
    user: '나',
    title: '애월 여행',
    hashtag: '#풍경 #자연탐방',
    profileImage: require('../../assets/images.png'),
    body: "애월의 숨겨진 명소들을 찾을 수 있었어요. 잘 알려지지 않은 장소들이 많아서 좋았어요.",
    photos: [require('../../assets/aewol.jpg')],
    shareSchedule: true,
  },
  {
    id: '1',
    user: '사용자1',
    title: '제주 여행 추천',
    hashtag: '#휴식 #맛집',
    profileImage: require('../../assets/images.png'),
    body: "제주도에서 가장 추천하는 맛집이에요!",
    photos: [require('../../assets/food.png')],
    shareSchedule: true,
  },
  {
    id: '2',
    user: '사용자2',
    title: '서귀포 코스',
    hashtag: '#자연 #힐링',
    profileImage: require('../../assets/images.png'),
    body: "자연 느낄 수 있는 코스",
    photos: [require('../../assets/seogwipo.jpg')],
    shareSchedule: true,
  },
];

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState(initialReviews);

  const updateReview = (updatedReview) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === updatedReview.id ? updatedReview : r))
    )
  }

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
