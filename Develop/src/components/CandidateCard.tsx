//nimport type React from 'react';
import type Candidate from "../interfaces/Candidate.interface"

type CandidateCardProps = {
    currentCandidate: Candidate;
    addToSavedCandidateList?: (() => void) | null;
   };

const CandidateCard = ({currentCandidate, addToSavedCandidateList}: CandidateCardProps) => {
    console.log(currentCandidate)
    return (
        <>
        <section className='candidateCard'>
            <figure>
                <img src={`${currentCandidate.avatar_url || ''}`} alt={`${currentCandidate.name}`}/>
            </figure>
            <article className='info'>
                <h2>{currentCandidate.name || 'No Name'}</h2>
                <p>Location: {currentCandidate.location || 'N/A'}</p>
                <p>Email: {currentCandidate.email || 'N/A'}</p>
                <p>Company: {currentCandidate.company || 'N/A'}</p>
                <p>Bio: {currentCandidate.bio || 'N/A'}</p>

            </article>
            {/* figure out how to add button for addtoSavedCandidateList */}
            <button className="next-candidate" color='red'
            onClick={() => currentCandidate}>-</button>
            <button className='add-candidate' color='green'
            onClick={() => addToSavedCandidateList?.()}>+</button>
        </section>
        </>
    )
};

export default CandidateCard