import { ImplementArticle } from "@src/components/core/interfaces";

const headersConfig = () => {
    return new Headers({
        'Content-Type': 'application/json',
    })
}

const prepareUrl = async (params?: []) => {
    const allParams: any = ['limit=3'];

    if (params) {
        Object.entries(params).forEach(([key, value]) => allParams.push(key + '=' + value));
    }

    // const formattedParams = params ? '?' + allParams.join('&') : '';
    // return `https://dev.codeleap.co.uk/careers/${formattedParams}`;
    return `https://dev.codeleap.co.uk/careers/`;
}

const url: string = await prepareUrl();

export const listArticles = async () => {
    const data = await fetch(url, {
        method: 'get',
        headers: headersConfig()
    });

    return data.json();

}

export const storeArticle = async (formData: ImplementArticle) => {
    const data = await fetch(url, {
        method: 'post',
        headers: headersConfig(),
        body: JSON.stringify(formData)
    });

    return data.json();
}

export const editArticle = async (formData: ImplementArticle, articleId: number) => {
    const data = await fetch(`${url}${articleId}/`, {
        method: 'put',
        headers: headersConfig(),
        body: JSON.stringify(formData)
    });

    return data.json();
}

export const deleteArticle = async (articleId: number) => {
    const data = await fetch(`${url}${articleId}/`, {
        method: 'delete',
        headers: headersConfig()
    });

    return data.json();
};


