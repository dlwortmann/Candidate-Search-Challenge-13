//import React from 'react';
import { useEffect, useState } from 'react';
import SavedCandidateList from '../components/SavedCandidateList.tsx'
import Candidate from '../interfaces/Candidate.interface.tsx';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedCandidates');
    if (stored) {
      const parsedSavedCandidates = JSON.parse(stored)
      setSavedCandidates(parsedSavedCandidates)
    }
  }, [])
  return (
    <>
      <h1>Potential Candidates</h1>
      {(!savedCandidates?.length || savedCandidates?.length === 0) ? (<h2>Add Candidates to list</h2>) : (<SavedCandidateList savedCandidates={savedCandidates}
      />
      )}
    </>
  );
};

export default SavedCandidates;
