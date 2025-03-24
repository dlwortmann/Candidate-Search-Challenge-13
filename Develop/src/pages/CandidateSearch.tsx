import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import { FormEvent } from 'react';
import CandidateCard from '../components/CandidateCard';
// useEffect and searchGithub were in starter code, were should the be included?
const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    username: '',
    location: '',
    avatar: '',
    email: '',
    html_url: '',
    company: '',
  })

  const [searchInput, setSearchInput] = useState<string>('');

  const addToSavedCandidates = () => {
    let parsedSavedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedCandidates === 'string') {
      parsedSavedCandidates = JSON.parse(storedCandidates)
    }
    parsedSavedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidate', JSON.stringify(parsedSavedCandidates))
  };

  const searchForCandidates = async (event: FormEvent, candidate: string) => {
    event.preventDefault();
    const data: Candidate = await searchGithubUser(candidate);

    setCurrentCandidate(data);
  }

  return (
    <>
      <h1>CandidateSearch</h1>;
      <section>
        <form onSubmit={(event: FormEvent) => searchForCandidates(event, searchInput)}>
          <input type='text'
            name=''
            id=''
            placeholder='Enter a name'
            onChange={(e) => setCurrentCandidate(searchInput)} />;
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToSavedCandidateList={addToSavedCandidates} />
    </>
  )
};

export default CandidateSearch;
