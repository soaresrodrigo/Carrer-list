export interface Article extends ICreateArticle {
    id: number,
    created_datetime: string,
}

export interface ICreateArticle {
    username: string;
    title: string;
    content: string;
}