// 임시용, 추후 삭제 예정

// 이미지 /static/img 로 옮기기
import dataThumbnail from "../../../assets/img/index/courses/data.png"
import digitalMarketing from "../../../assets/img/index/courses/digitalMarketing.png"
import automateWithPython from "../../../assets/img/index/courses/python-main-image.jpg"

// data는 각 스터디 상세페이지 markdown 파일의 frontmatter로 입력
export default [
  {
    courseImage: dataThumbnail,
    courseName: `Startup School`,
    details: `스타트업을 시작하고, 운영하고 싶은 분들을 위한 스터디!`,
    price: 130000,
    period: 10,
    start_date: "2019-04-01",
    end_date: "2019-06-10",
    open: true,
    main: true,
  },
  {
    courseImage: digitalMarketing,
    courseName: "Product Management",
    details: `Product Management 에 필요한 전반적인 스킬을 학습하는 스터디!`,
    price: 100000,
    period: 8,
    start_date: "2019-03-18",
    end_date: "2019-05-13",
    open: true,
    main: true,
  },
  {
    courseImage: automateWithPython,
    courseName: "파이썬으로 업무 자동화하기",
    details: `칼퇴를 부르는 업무 자동화 스킬을 배우고 싶은 모든 직장인 분들을 위한 스터디!`,
    price: 50000,
    period: 4,
    start_date: "2019-04-01",
    end_date: "2019-04-27",
    open: true,
    main: true,
  },
]
