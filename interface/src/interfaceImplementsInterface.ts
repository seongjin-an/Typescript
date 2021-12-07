interface IPerson3{
    name: string;
    age?: number;
}

interface IKorean extends IPerson3{
    city: string;
}

const k: IKorean = {
    name: 'ansj',
    city: 'bucheon'
}

