import React from "react"
import practiceImage from "../../../img/index/stages/practice.svg"
import shareImage from "../../../img/index/stages/share.svg"
import applyImage from "../../../img/index/stages/apply.svg"

export default [
  {
    id: 0,
    stageImage: practiceImage,
    stageTitle: "학습하기",
    details: (
      <p>
        자기주도적으로 먼저 학습하는 단계입니다.
        <br />
        학습자들은 주제에 맞는 커리큘럼을 제공받고,
        <br />
        체계적인 일정에 따라 학습합니다.
        <br />
      </p>
    ),
  },
  {
    id: 1,
    stageImage: shareImage,
    stageTitle: "공유하기",
    details: (
      <p>
        여러분의 학습능률을 배로 올려주는 단계입니다.
        <br />
        자신이 학습한 내용을 정리해서 발표합니다.
        <br />
        서로에게 설명하면서 배운 것을 다시 확인합니다.
      </p>
    ),
  },
  {
    id: 2,
    stageImage: applyImage,
    stageTitle: "적용하기",
    details: (
      <p>
        학습의 마침표는 이론의 습득이 아니라 적용입니다. 실제로 적용할 수 있는
        프로젝트를 해보면서 습득한 지식을 완벽하게 자신의 것으로 만듭니다.
      </p>
    ),
  },
]
