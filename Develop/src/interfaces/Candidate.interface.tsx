// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    readonly name: string;
    readonly username: string;
    readonly location: string;
    readonly avatar_url: string;
    readonly email: string;
    readonly html_url: string;
    readonly bio: string;
    readonly company: string;
}

export default Candidate;