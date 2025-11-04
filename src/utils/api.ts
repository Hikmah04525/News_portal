import { ApiResponse, getRequest } from "./requests"
import { NewsApiResponse } from "./Types"
import { BaseURL } from "./constants"


const apikey = import.meta.env.VITE_API_KEY
export const getTopHeadlines= async (category?:string, pageNo?: number): Promise<ApiResponse<NewsApiResponse>> => {
        const url = `${BaseURL}/top-headlines?country=us&apiKey=${apikey} ${category ? `&category=${category}` : ''}${pageNo?`&page=${pageNo}`:''}`;
        return await getRequest<NewsApiResponse>(url);
}  

export const getByQuery = async(query:string, pageNo?: number): Promise<ApiResponse<NewsApiResponse>> => {
        const url = `${BaseURL}/everything?apiKey=${apikey} ${query ? `&q=${query}` : ''}${pageNo?`&page=${pageNo}`:''}&pageSize=20`;
        return await getRequest<NewsApiResponse>(url);
}  

