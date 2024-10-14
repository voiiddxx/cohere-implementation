"use server"
import { CohereClient } from 'cohere-ai/Client';

const cohere = new CohereClient({
  token: 'Your API KEY',
});



export const cohereChatSerivice =async (message:string)=>{
    try {
        
        
        const cohereResponse = await cohere.chat({
            message:message,
            model: "command-r-08-2024",
            connectors:[
                {
                id:"web-search"
                }
        ],
        citationQuality:"accurate",
        preamble:'you are an ai assistant who help to repond user query',
        });
        return cohereResponse;
    } catch (error) {
        console.log(error);
        throw new Error('Some error occured while creating chat')
    }
}