export interface IFloridaman {
    day: number;
    month: number;
    data: IFloridamanData[];
}

export interface IFloridamanData {
    title: string;
    link: string;
    year?: number;
}