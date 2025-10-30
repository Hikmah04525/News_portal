import { ApiResponse, getRequest } from "./requests"
import { NewsApiResponse } from "./Types"
import { BaseURL } from "./constants"


const apikey = import.meta.env.VITE_API_KEY
export const getTopHeadlines= async (): Promise<ApiResponse<NewsApiResponse>> => {
        const url = `${BaseURL}/everything?q=ethiopia+education&apiKey=${apikey}`;
        return await getRequest<NewsApiResponse>(url);
}  