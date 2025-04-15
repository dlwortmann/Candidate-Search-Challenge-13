// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    readonly login: string;
    readonly name: string | null;
    readonly location: string | null;
    readonly avatar_url: string;
    readonly email: string | null;
    readonly html_url: string;
    readonly bio: string | null;
    readonly company: string |null;
    
}

export default Candidate;