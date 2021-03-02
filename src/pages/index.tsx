import { GlobalStyles } from '../styles/GlobalStyles'
import HomeMain from '../components/Home-Main/HomeMain'
import { GetServerSideProps } from 'next'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps ) {

  return (
    <>
      <GlobalStyles />
      <ChallengesProvider level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}>
        <HomeMain />
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience:  Number(currentExperience),
      challengesCompleted:  Number(challengesCompleted)
    }
  }
}