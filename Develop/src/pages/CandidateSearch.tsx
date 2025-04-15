import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login: '',
    name: null,
    location: null,
    avatar_url: '',
    email: null,
    html_url: '',
    company: null,
    bio: null,
  });

  const [_candidateArr, setCandidateArr] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // const findCandidate = async (username: string) => {
  //   const singleUser = await searchGithubUser(username);
  //   if (singleUser) {
  //     setCurrentCandidate(singleUser);
  //   } else {
  //     setCurrentCandidate({
  //       login: '',
  //       name: null,
  //       location: null,
  //       avatar_url: '',
  //       email: null,
  //       html_url: '',
  //       company: null,
  //       bio: null,
  //     });
  //   }
  // };

  useEffect(() => {
    const loadCandidates = async () => {
      const users = await searchGithub();
      
      const candidateProfiles: Candidate[] = (
        await Promise.all(users.map((user) => searchGithubUser(user.login)))
      ).filter((profile): profile is Candidate => profile !== null); 
    
      if (candidateProfiles.length > 0) {
        setCurrentCandidate(candidateProfiles[0]);
      }
    
      setCandidateArr(candidateProfiles);
      setLoading(false);
    };

    loadCandidates();
  }, []);

  const addToSavedCandidates = () => {
    let parsedSavedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      parsedSavedCandidates = JSON.parse(storedCandidates);
    }
    parsedSavedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedSavedCandidates));
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Candidate Search</h1>
          <CandidateCard
            currentCandidate={currentCandidate}
            addToSavedCandidateList={addToSavedCandidates}
          />
        </>
      )}
    </>
  );
};

export default CandidateSearch;