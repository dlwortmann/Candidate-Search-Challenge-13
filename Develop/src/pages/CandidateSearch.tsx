import { useState, } from 'react'; // add useEffect back in
//import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';
// useEffect and searchGithub were in starter code, were should the be included?
const CandidateSearch = () => {
  const [currentCandidate, _setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
    bio: ''
  })

 
// useEffect
//   const searchForCandidates = () => {
  
//     const data: Candidate = await searchGithub();
//     return setCurrentCandidate(currentCandidate);
//   }


//   useEffect(() => {
//     const loadCandidates = async () => {
//       const user = await searchGithub();
//       const profile = await searchGithubUser();
      
//     }
//     return loadCandidates(profile)
//   })

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
