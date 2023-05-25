import { ICreateArticle } from "@src/components/core/interfaces";

const headersConfig = () => {
    return new Headers({
        'Content-Type': 'application/json'
    })
}

const prepareUrl = async (params?: []) => {
    const allParams: any = ['limit=3'];

    if (params) {
        Object.entries(params).forEach(([key, value]) => allParams.push(key + '=' + value));
    }

    const formattedParams = params ? '?' + allParams.join('&') : '';
    return `https://dev.codeleap.co.uk/careers/${formattedParams}`;
}


export const listArticles = async (params?: []) => {
    const url: string = await prepareUrl(params);

    const data = await fetch(url, {
        method: 'get',
        headers: headersConfig()
    });

    return data.json();

}

export const storeArticle = async (formData: ICreateArticle) => {
    const url: string = await prepareUrl();

    const data = await fetch(url, {
        method: 'post',
        headers: headersConfig(),
        body: JSON.stringify(formData)
    });

    return data.json();

}