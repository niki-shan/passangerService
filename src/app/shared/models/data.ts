

export interface Ipass {
    id: number;
    fullname: string;
    checkedIn: boolean | null,
    checkInDate: number | null
    children: {
        name : string,
        age : number
    }[] | null
}[]

