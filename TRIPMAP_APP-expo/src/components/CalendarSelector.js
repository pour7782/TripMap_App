import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

// npm install react-native-calendars --legacy-peer-deps
// npm install moment
const CalendarSelector = () => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [markedDates, setMarkedDates] = useState({})

    const handleDayPress = (day) => {
        const selected = day.dateString

        // 시작일이 없으면 설정
        if (!startDate || (startDate && endDate)) {
            setStartDate(selected)
            setEndDate(null)
            setMarkedDates({
                [selected]: {
                startingDay: true,
                endingDay: true,
                color: "#00B0FF",
                textColor: "white",
                },
            })
        } else {
        // 종료일 선택 & 범위 계산
        const range = getDateRange(startDate, selected)
        const marked = {}

        range.forEach((date, index) => {
            if (index === 0) {
                marked[date] = {
                    startingDay: true,
                    color: "#00B0FF",
                    textColor: "white",
                }
            } else if (index === range.length - 1) {
                marked[date] = {
                    endingDay: true,
                    color: "#00B0FF",
                    textColor: "white",
                }
            } else {
                marked[date] = {
                    color: '#00B0FF',
                    textColor: 'white',
                }
            }
        })

        setEndDate(selected)
        setMarkedDates(marked)
        }
    }

    // 날짜 범위 계산 함수
    const getDateRange = (start, end) => {
        const range = []
        let current = moment(start)
        const last = moment(end)
        const isBefore = current.isBefore(last)

        if (!isBefore) {
            [start, end] = [end, start]
            current = moment(start)
        }

        while (current.isSameOrBefore(end)) {
            range.push(current.format("YYYY-MM-DD"))
            current.add(1, "day")
        }

        return range
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>여행 기간 선택</Text>
            <Calendar
                markingType={"period"}
                markedDates={markedDates}
                onDayPress={handleDayPress}
                theme={{
                backgroundColor: "#ffffff",
                calendarBackground: "#ffffff",
                textSectionTitleColor: "#2E8BC0",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "#00B0FF",
                dayTextColor: "#222222",
                arrowColor: "#00B0FF",
                monthTextColor: "#2E8BC0",
                textDayFontWeight: "500",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "600",
                }}
            />
            {startDate && endDate && (
                <Text style={styles.selected}>
                선택된 기간: {startDate} ~ {endDate}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 15,
        color: "#2E8BC0",
        fontWeight: "bold",
    },
    selected: {
        marginTop: 10,
        fontSize: 13,
        color: "#2E8BC0",
        fontWeight: "bold",
    },
})

export default CalendarSelector;