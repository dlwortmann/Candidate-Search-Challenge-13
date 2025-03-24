import React from 'react';
import { useEffect, useState } from 'react';
import SavedCandidateList from '../components/SavedCandidateList.tsx'
import Candidate from '../interfaces/Candidate.interface.tsx';
const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const parsedSavedCandidates = JSON.parse(localStorage.getItem('savedCandidate') as string);
    setSavedCandidates(parsedSavedCandidates)
  }, [])
  return (
    <>
      <h1>Potential Candidates</h1>
      {(!savedCandidates?.length || savedCandidates?.length === 0) ? (<h1>Add Candidates to list</h1>) : (<SavedCandidateList savedCandidates={savedCandidates}
      />
      )}
    </>
  );
};

export default SavedCandidates;
