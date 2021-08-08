import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import "./Achievements.css";
import { achievementsList } from '../../assets/achievementsList';
import AchievementCard from './AchievementCard'

const Achievements = () => {
  return (
    <div>
      <div className='section-container'>
            <Header
                heading='My Achievements.'
                details="Here are a few achievements, check them out!"
            />
      <div className='achievement-cards-container'>
        {achievementsList.map(i => 
          <AchievementCard 
            title={i.title}
            competitionName={i.competitionName}
            description={i.description} 
            date={i.date}
          />)}
      </div>
      <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
      </div>
    </div>
  )
}

export default Achievements