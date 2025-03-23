import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard.tsx';
//import SavedCandidates from '../pages/SavedCandidates';

interface SavedCandidatesProps {
    savedCandidates: Candidate[];
}

const SavedCandidates = ({ savedCandidates }: SavedCandidatesProps) => {
    console.log(savedCandidates)
    return (
        <>
            <ul>
                {savedCandidates.map((candidate) => (
                    <CandidateCard
                        currentCandidate={candidate}
                        key={candidate.name}
                    />
                ))}
            </ul></>
    )
}

export default SavedCandidates