import MyScheduleList from "./MyScheduleList";
import MyReviewList from "./MyReviewList";
import MySharedScheduleList from "./MySharedScheduleList";

const MyTabContent = ({ selectedTab }) => {
    switch (selectedTab) {
        case 'schedule':
            return <MyScheduleList destination="서울여행기" />
        case 'review':
            return <MyReviewList />
        case 'shared':
            return <MySharedScheduleList destination="딸기시루" />
        default:
            return null
    }
}

export default MyTabContent;