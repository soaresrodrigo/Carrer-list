import { Article, DeleteArticle, ImplementArticle } from "@src/components/core/interfaces";
import { deleteArticle, editArticle, listArticles, storeArticle } from "@src/actions/client";
import createAsyncSlice, { PropsConfig } from "./createAsyncSlice";

const articleSliceConfig: PropsConfig<Article[]> = {
    name: "articles/list",
};

const createArticleSliceConfig: PropsConfig<Article> = {
    name: "articles/create",
};

const updateArticleSliceConfig: PropsConfig<Article> = {
    name: "articles/update",
};
const deleteArticleSliceConfig: PropsConfig<DeleteArticle> = {
    name: "articles/delete",
};


const articles = createAsyncSlice(articleSliceConfig);
const setArticleCreate = createAsyncSlice(createArticleSliceConfig);
const setArticleUpdate = createAsyncSlice(updateArticleSliceConfig);
const setArticleDelete = createAsyncSlice(deleteArticleSliceConfig);


export const getArticles = () => {
    return articles.asyncAction(listArticles());
};

export const createArticle = (formData: ImplementArticle) => {
    return setArticleCreate.asyncAction(storeArticle(formData));
};

export const updateArticle = (formData: ImplementArticle, idArticle: number) => {
    return setArticleUpdate.asyncAction(editArticle(formData, idArticle));
};

export const destroyArticle = (idArticle: number) => {
    return setArticleDelete.asyncAction(deleteArticle(idArticle));
};

export default articles.reducer;
