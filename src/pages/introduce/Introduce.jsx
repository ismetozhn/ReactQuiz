import React, { useState } from 'react'
import "./Introduce.css"
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
  const difficulty = ["easy", "medium", "hard"]
  const [difficultyChange, setDifficultyChange] = useState("")
  const TOTAL_QUESTİONS = 10;

  const navigate = useNavigate()


  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
    }
  }
  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src="https://cdn.dribbble.com/users/315465/screenshots/15748270/media/4cca4b90022715562c4459a8374e7b3c.png?resize=400x300&vertical=center" alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className='introduce-btn'>Quiz Start</div>
      </div>
    </div>
  )
}

export default Introduce