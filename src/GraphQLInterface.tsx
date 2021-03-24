import { url, useEmulator } from "./App";
import { Processor, ParseQuery } from "./GraphQLEmulator";

export interface IGraphQLQuery {
    query: string
    variables: { [id: string]: any }
}

export interface IGraphQLResult {
    data: any
    dataPresent: boolean
    extensions: any
}

export async function GraphQLProcessor(graphQLQuery: IGraphQLQuery): Promise<IGraphQLResult> {

    if (useEmulator) {
        /*
        I couldn't get the authentication working, so I've used a simple server emultator instead 
        */
        const processor = new Processor(ParseQuery(graphQLQuery))

        return Promise.resolve(processor.execute())
    } else {
        /*
        This code follows the emailed instructions from James Richardson, below.  
        Unfortunately it doesn't seem to work.
        -------------------------------------------------------------------------------
        Hey mate,

        Please try the following:

        Using insomnia create a new User. 
        Take that User Id and set it as the http Authorization header 
        Then also make a organisation in insomnia.

        Kind regards,

        James
        -------------------------------------------------------------------------------
        This being the JSON returned by the createUser mutation:
        {
            "data": {
                "createUser": {
                "id": "7fbcf871-802b-47c9-9197-61734a014364",
                "email": "john@example.com",
                "firstName": "John",
                "lastName": "Dory",
                "createdAt": "2021-03-22T20:56:17.471765Z",
                "updatedAt": "2021-03-22T20:56:17.471770Z",
                "memberships": []
                }
            },
            "extensions": null,
            "dataPresent": true
        }
        -------------------------------------------------------------------------------
        */
        const request: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': '7fbcf871-802b-47c9-9197-61734a014364'
            },
            body: JSON.stringify(graphQLQuery)
        }
        const result = await fetch(url, request);
        const text = await result.text()

        try {
            return JSON.parse(text);
        }
        catch (ex) {
            console.log(text)
            return { data: null, dataPresent: false, extensions: null }
        }
    }
}

