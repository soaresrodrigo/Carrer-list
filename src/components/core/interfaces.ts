export interface ImplementArticle {
    username?: string;
    title: string;
    content: string;
}

export interface Article extends ImplementArticle {
    id: number,
    created_datetime: string,
}

export interface APIArticles {
    count: number;
    next: string;
    previous: string | null;
    results: Article[]
}

export interface DeleteArticle {
    detail: string;
}
