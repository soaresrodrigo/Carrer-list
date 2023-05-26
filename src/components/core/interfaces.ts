export interface CreateArticle {
    username: string;
    title: string;
    content: string;
}

export interface Article extends CreateArticle {
    id: number,
    created_datetime: string,
}

export interface APIArticles {
    count: number;
    next: string;
    previous: string | null;
    results: Article[]
}
