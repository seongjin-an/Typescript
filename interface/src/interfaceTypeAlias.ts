type EatType = (food: string) => void;

interface IEat{
    (food: string): void;
}

type PersonList = string[];

interface IPersonList {
    [index: number]: string;
}

//intersection
interface ErrorHandling{
    success:boolean;
    error?: {message: string};
}

interface ArtistsData{
    artists: {name: string}[];
}
type ArtistsResponseType = ArtistsData & ErrorHandling
const artistsResponse: ArtistsResponseType = {
    artists: [{name: 'ansj'}],
    success: true,
}
console.log('artistsResponse:', artistsResponse)

interface IArtistsResponse extends ArtistsData, ErrorHandling{}

const artistsResponse2: IArtistsResponse = {
    artists: [{name: 'ansj'}],
    success: true,
}
console.log('artistsResponse2:', artistsResponse2)

//union
interface Bird{
    fly(): void;
    layEggs(): void;
}

interface Fish{
    swim(): void;
    layEggs(): void;
}

type PetType = Bird | Fish

// interface IPet extends PetType{}//error
// class Pet implements PetType{}//error


// declaration merging - interface
interface MergingInterface{
    a: string;
}
interface MergingInterface{
    b: string;
}

let mi: MergingInterface;
// declaration merging - type alias
type MergingType = {
    a: string
}
// type MergingType = {
//     b: string
// }