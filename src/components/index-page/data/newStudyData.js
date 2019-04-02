import React from "react"
import newStudyImage from "../../../assets/img/index/newstudy/newStudy.jpg"
import studyHelperImage from "../../../assets/img/index/newstudy/studyHelper.jpg"

export default [
  {
    id: 0,
    stageImage: studyHelperImage,
    stageTitle: "스터디 파트너 모집",
    callToAction: "자세히 보기",
    details: (
      <div>
        <strong>스터디 진행을 도와줄 파트너를 모집합니다.</strong>
        <br />
        스터디 파트너는 스터디 커리큘럼을 큐레이션하고, 참가자들과 함께 스터디
        주제에 대해 학습하고, 스터디 모임을 진행하는 역할을 맡게 됩니다.
        <p style={{ marginTop: "20px" }}>
          <strong>혜택</strong>
        </p>
        <b>스터디에 주도적으로 참여하고, 부가적인 수익을 창출할 수 있습니다.</b>
      </div>
    ),
    link: "http://bit.ly/2FDY2ld",
  },
  {
    id: 1,
    stageImage: newStudyImage,
    stageTitle: "새로운 스터디 주제 제안",
    callToAction: "제안하기",
    details: (
      <div>
        <strong>새로운 스터디 주제를 제안</strong>하실 수 있습니다. 지금
        스터디스테이츠에서 진행하고 있지는 않지만, 다른 분들과 함께 공부해보고
        싶은 분야가 있으시면 자유롭게 제안해주세요.
        <br />
        <br />
        <div>
          검토후 스터디가 오픈되면 주제를 제안해주신 분들에게 가장 먼저
          알려드립니다.
          <div style={{ marginTop: "10px" }}>
            스터디 주제는 모든 분야가 가능합니다.
          </div>
        </div>
      </div>
    ),
    link: "http://bit.ly/2CzEPhN",
  },
]
