import React from "react"

import Study from "./Study"

const ManageList = () => {
  // TODO: 서버에서 데이터 받기 (user_id + status="paid" => study_id)
  const pythonInfo = {
    startDate: "2019-04-08",
    endDate: "2019-05-04",
    period: "4주",
    totalMeeting: "4회",
    schedule: "4/13, 4/20, 4/27, 5/4",
    studyTimes: {
      frequency: "매주",
      dayOfWeek: "토요일",
      time: "20:00 - 21:00",
    },
  }

  const pythonCurriculum = {
    intro: "",
    weeklyTopics: [
      `파이썬 프로그래밍 기초\n
      파이썬 기초\n
      흐름 제어\n
      함수\n
      리스트\n
      사전 및 구조화 데이터\n
      문자열 조작하기\n
      실습 - 평균 구하기, 정렬하기 등 기본문제 풀어보기`,
      `작업 자동화하기\n
      정규표현식으로 패턴 대조하기\n
      파일 읽고 쓰기\n
      파일 체계화하기\n
      디버깅\n
      웹 스크랩`,
      `작업 자동화하기\n
      엑셀 스프레드시트로 자동화하기\n
      PDF 및 Word 문서 작업하기\n
      CSV 파일 및 JSON 데이터로 작업하기\n
      시간관리, 작업 예약 그리고 다른 프로그램 실행\n
      이메일 및 문자 메세지 보내기\n
      GUI 자동화를 통한 키보드 및 마우스 제어`,
      `개인 프로젝트 진행하기`,
    ],
  }

  const pythonMembers = [
    { name: "테스트", email: "test@gmail.com", phone: "010-1111-1111" },
    { name: "홍길동", email: "hong@gmail.com", phone: "010-2222-2222" },
  ]

  return (
    <>
      <Study
        intro="프로그래밍에 대한 경험이 전혀 없는 분이라도 파이썬 프로그래밍의 기초부터 시작하여, 지겨운 단순 반복 작업을 파이썬 프로그래밍을 통해 자동화할 수 있는 스터디입니다."
        title="파이썬으로 업무 자동화하기"
        done={false}
        info={pythonInfo}
        curriculum={pythonCurriculum}
        members={pythonMembers}
      />
    </>
  )
}

export default ManageList
