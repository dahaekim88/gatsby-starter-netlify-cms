import React from "react"

import ApplyStudy from "./ApplyStudy"

const ApplyList = () => {
  // TODO: graphql로 데이터 불러와서 넘기기
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

  const pythonCurriculum = [
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
  ]

  const pythonPartner = {
    image: "../../../static/img/partner-chaehwanoh.jpg",
    name: "오채환",
    email: "ohchaehwan@gmail.com",
    phone: "010-0000-0000", // ??
    currentJob: "프로그래머",
    careers: [
      { career: "(전) 두다지 연구개발팀 근무" },
      { career: "두다지 서버개발자 양성과정 참여" },
      { career: "동아대학교 경영학/컴퓨터공학 학사 졸업" },
    ],
  }

  const productInfo = {
    startDate: "2019-05-20",
    endDate: "2019-07-15",
    period: "8주",
    totalMeeting: "4회",
    schedule: "6/3, 6/17, 7/1, 7/15",
    studyTimes: {
      frequency: "격주",
      dayOfWeek: "월요일",
      time: "22:00 - 23:00",
    },
  }

  const productCurriculum = [
    `Introduction to Product Management\n
      Introduction to Product Development\n
      Ideas and User Needs\n
      Competitive and Market Analysis`,
    `Customer Development\n
      Designing and Running Experiments`,
    `Conceptualizing the Solution\n
      Metrics for Product Managers - Defining Success and Measuring Results\n
      Building the Product - Project Management for PMs\n
      Working with People and Stakeholders`,
    `Technology for Proudct Managers\n
      What You Should Do to Prepare Yourself for the job\n
      How to Look for a job in Product Management\n
      How to Get the job in Product Management`,
  ]

  const productPartner = {
    image: "../../../static/img/partner-ingikim.png",
    name: "김인기",
    email: "ingikim@codestates.com",
    phone: "010-0000-1111", // ??
    currentJob: "코드스테이츠 대표",
  }

  const members = [
    { name: "테스트", email: "test@gmail.com", phone: "010-1111-1111" },
    { name: "홍길동", email: "hong@gmail.com", phone: "010-2222-2222" },
  ]

  return (
    <>
      <ApplyStudy
        intro="프로그래밍에 대한 경험이 전혀 없는 분이라도 파이썬 프로그래밍의 기초부터 시작하여, 지겨운 단순 반복 작업을 파이썬 프로그래밍을 통해 자동화할 수 있는 스터디입니다."
        title="파이썬으로 업무 자동화하기"
        done={false}
        info={pythonInfo}
        curriculum={pythonCurriculum}
        partner={pythonPartner}
        members={members}
      />
      <ApplyStudy
        intro="Product Management 에 전반적인 부분을 이해하고,

        본인의 상황에 맞는 역량을 더 발전시킬 수 있는 스터디 입니다."
        title="Product Management"
        done={true}
        info={productInfo}
        curriculum={productCurriculum}
        partner={productPartner}
        members={members}
      />
    </>
  )
}

export default ApplyList
