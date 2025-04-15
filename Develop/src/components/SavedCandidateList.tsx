import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard.tsx';

interface SavedCandidatesProps {
  savedCandidates: Candidate[];
}

const SavedCandidatesList = ({ savedCandidates }: SavedCandidatesProps) => {
  //console.log(savedCandidates); 
  return (
    <div>
      {savedCandidates.length === 0 ? (
        <p>No saved candidates yet!</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <CandidateCard
              currentCandidate={candidate}
              key={candidate.login} 
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidatesList;