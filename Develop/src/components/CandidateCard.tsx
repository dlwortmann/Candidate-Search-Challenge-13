import type React from 'react';
import type Candidate from "../interfaces/Candidate.interface"

type CandidateCardProps = {
    currentCandidate: Candidate;
    addToSavedCandidateList?: (() => void) | null;
   };

const CandidateCard = ({currentCandidate, addToSavedCandidateList}: CandidateCardProps) => {
    return (
        <>
        <section className='candidateCard'>
            <figure>
                <img src={`${currentCandidate.avatar}`} alt={`${currentCandidate.name}`}/>
            </figure>
            <article className='info'>
                <h2>{currentCandidate.name}</h2>
                <p>username: {currentCandidate.username}</p>
                <p>Location: {currentCandidate.location}</p>
                <p>Email: {currentCandidate.email}</p>
                <p>HTML: {currentCandidate.html_url}</p>
                <p>Company: {currentCandidate.company}</p>
            </article>
            {/* figure out how to add button for addtoSavedCandidateList */}
            <button className='add-candidate' onClick={() => addToSavedCandidateList}></button>
        </section>
        </>
    )
};

export default CandidateCard