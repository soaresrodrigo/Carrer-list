import { Article, CreateArticle } from "@src/components/core/interfaces";
import { listArticles, storeArticle } from "@src/actions/client";
import createAsyncSlice, { PropsConfig } from "./createAsyncSlice";

const articleSliceConfig: PropsConfig<Article[]> = {
    name: "articles/list",
};
const createArticleSliceConfig: PropsConfig<Article[]> = {
    name: "articles/create",
};


const articles = createAsyncSlice(articleSliceConfig);
const setArticle = createAsyncSlice(createArticleSliceConfig);


export const getArticles = () => {
    return articles.asyncAction(listArticles());
};

export const createArticle = (formData: CreateArticle) => {
    return setArticle.asyncAction(storeArticle(formData));
};


export default articles.reducer;
