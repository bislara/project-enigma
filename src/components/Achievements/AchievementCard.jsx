const AchievementCard = ({
  title, description, date, competitionName
}) => {
  return (
    <div className="achievement-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
        <div className="flip-card-back">
          <h3>{competitionName}</h3>
         <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard