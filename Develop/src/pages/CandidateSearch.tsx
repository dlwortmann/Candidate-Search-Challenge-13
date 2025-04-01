import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
// useEffect and searchGithub were in starter code, were should the be included?
const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
    bio: ''
  })

  const [candidateArr, setCandidateArr] = useState<Candidate[]>([])

  //useEffect
  //   const searchForCandidates = () => {

  //     const data: Candidate = await searchGithub();
  //     return setCurrentCandidate(currentCandidate);
  //   }


  useEffect(() => {
    const loadCandidates = async () => {
      const user = await searchGithub();
      const userArr = user.map(async (user: any) => {
        const candidate = await searchGithubUser(user.login)
        return {
          name: candidate.name || '',
          username: candidate.login || '',
          location: candidate.location || '',
          avatar: candidate.avatar_url || '',
          email: candidate.email || '',
          html_url: candidate.html_url || '',
          company: candidate.company || '',
          bio: candidate.bio || ''
        }
      })
      console.log(userArr)
      return userArr
    }
    loadCandidates().then( (data) => {
    setCandidateArr(data)
    setCurrentCandidate(data[0])
  })
  }, [])

  const addToSavedCandidates = () => {
    let parsedSavedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(storedCandidates)
    }
    parsedSavedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidate', JSON.stringify(parsedSavedCandidates))
  };



  return (
    <>
      <h1>Candidate Search</h1>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidateList={addToSavedCandidates} />
    </>
  )
};

export default CandidateSearch;
