import { ApiResponse, getRequest } from "./requests"
import { NewsApiResponse } from "./Types"
import { BaseURL } from "./constants"


const apikey = import.meta.env.VITE_API_KEY
export const getTopHeadlines= async (category?:string): Promise<ApiResponse<NewsApiResponse>> => {
        const url = `${BaseURL}/top-headlines?country=us&apiKey=${apikey} ${category ? `&category=${category}` : ''}`;
        return await getRequest<NewsApiResponse>(url);
}  