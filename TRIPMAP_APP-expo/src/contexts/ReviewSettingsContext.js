import React, { createContext, useContext, useState } from 'react';

// Context 생성
const ReviewSettingsContext = createContext();

// Provider 컴포넌트
export const ReviewSettingsProvider = ({ children }) => {
  const [shareSchedule, setShareSchedule] = useState(true); // 기본값 true

  return (
    <ReviewSettingsContext.Provider value={{ shareSchedule, setShareSchedule }}>
      {children}
    </ReviewSettingsContext.Provider>
  );
};

// Context 사용 훅
export const useReviewSettings = () => useContext(ReviewSettingsContext);
