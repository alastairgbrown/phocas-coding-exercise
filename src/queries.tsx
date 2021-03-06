export const queries = {
    "_type": "export",
    "__export_format": 4,
    "__export_date": "2020-02-26T03:06:25.190Z",
    "__export_source": "insomnia.desktop.app:v7.1.1",
    "resources": [
        {
            "_id": "req_43b5d493de504482a05254269752da1c",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"query me {\\n  me {\\n    id\\n    email\\n    firstName\\n    lastName\\n        \\n    createdAt\\n    updatedAt\\n    \\n    memberships {\\n      role {\\n        id\\n        __typename\\n        ... on AdminRole {\\n          admin\\n        }\\n        ... on UserRole {\\n            admin\\n            write\\n        }\\n      }\\n      \\n      organisation {\\n        id\\n        name\\n        timezone\\n      }\\n    }  \\n  }\\n}\",\"operationName\":\"me\"}"
            },
            "created": 1582668673666,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582273745007,
            "method": "POST",
            "modified": 1582686358735,
            "name": "Me",
            "parameters": [],
            "parentId": "fld_4bbc1a2aaccb4e409c8b947e27c77928",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_4bbc1a2aaccb4e409c8b947e27c77928",
            "created": 1582668648812,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582668648812,
            "modified": 1582668648812,
            "name": "Query",
            "parentId": "fld_7b61a934b9a748be83bd24b2e36953a9",
            "_type": "request_group"
        },
        {
            "_id": "fld_7b61a934b9a748be83bd24b2e36953a9",
            "created": 1582668024751,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582668024751,
            "modified": 1582668024751,
            "name": "Users",
            "parentId": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "_type": "request_group"
        },
        {
            "_id": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "created": 1582667642241,
            "description": "",
            "modified": 1582667642241,
            "name": "Tickets",
            "parentId": null,
            "_type": "workspace"
        },
        {
            "_id": "req_7ebc1bdb2d5d41daabdaec675d88267d",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"mutation createUser($user: UserInput!) {\\n  createUser(user: $user) {\\n    id\\n    email\\n    firstName\\n    lastName\\n        \\n    createdAt\\n    updatedAt\\n    \\n    memberships {\\n      role {\\n        id\\n        __typename\\n      }\\n      \\n      organisation {\\n        name\\n      }\\n    }  \\n  }\\n}\",\"variables\":{\"user\":{\"firstName\":\"John\",\"lastName\":\"Dory\",\"email\":\"john@example.com\"}},\"operationName\":\"createUser\"}"
            },
            "created": 1582668049644,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582405084175,
            "method": "POST",
            "modified": 1582675404995,
            "name": "Create User",
            "parameters": [],
            "parentId": "fld_7ad99ace978a4319b4b769b1cfb8d40b",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_7ad99ace978a4319b4b769b1cfb8d40b",
            "created": 1582668033279,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582668033279,
            "modified": 1582668033279,
            "name": "Mutations",
            "parentId": "fld_7b61a934b9a748be83bd24b2e36953a9",
            "_type": "request_group"
        },
        {
            "_id": "req_54e44efb29cd4bab81d40a90b8fb3738",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"query organisation($organisationId: ID!) {\\n  organisation(organisationId: $organisationId) {\\n    id\\n    name\\n    timezone\\n    createdAt\\n    updatedAt\\n    \\n    boards {\\n      id\\n      name\\n    }\\n    \\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\"},\"operationName\":\"organisation\"}"
            },
            "created": 1582669265346,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582536423343,
            "method": "POST",
            "modified": 1582674867966,
            "name": "Organisation",
            "parameters": [],
            "parentId": "fld_abda25010f03476d9a8a6f5ce3c6096f",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_abda25010f03476d9a8a6f5ce3c6096f",
            "created": 1582669238874,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582669238874,
            "modified": 1582669238874,
            "name": "Query",
            "parentId": "fld_181d5b22d3a041b5a98e9da10cfb6587",
            "_type": "request_group"
        },
        {
            "_id": "fld_181d5b22d3a041b5a98e9da10cfb6587",
            "created": 1582667741791,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582667741791,
            "modified": 1582667741791,
            "name": "Organisation",
            "parentId": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "_type": "request_group"
        },
        {
            "_id": "req_d81166cb729a4deb8567572160819a12",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"mutation createOrganisation($name: String!, $timezone: Timezone!) {\\n  createOrganisation(name: $name, timezone: $timezone) {\\n    id\\n    name\\n    \\n    createdAt\\n    updatedAt\\n    \\n    boards {\\n      name\\n    }\\n    \\n  }\\n}\",\"variables\":{\"name\":\"example\",\"timezone\":\"Pacific/Auckland\"},\"operationName\":\"createOrganisation\"}"
            },
            "created": 1582667762511,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582667762511,
            "method": "POST",
            "modified": 1582674776232,
            "name": "Create Organisation",
            "parameters": [],
            "parentId": "fld_c6c1f7028966415496d9bc9b36bb0fd7",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_c6c1f7028966415496d9bc9b36bb0fd7",
            "created": 1582667767439,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582667767439,
            "modified": 1582667767439,
            "name": "Mutations",
            "parentId": "fld_181d5b22d3a041b5a98e9da10cfb6587",
            "_type": "request_group"
        },
        {
            "_id": "req_e5eef31011064e8fabe8801565ab2e7b",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"mutation updateOrganisation($organisationId: ID!, $organisationInput: OrganisationInput!) {\\n  updateOrganisation(organisationId: $organisationId, organisationInput: $organisationInput) {\\n    id\\n    name\\n    \\n    createdAt\\n    updatedAt\\n    \\n    boards {\\n      name\\n    }\\n    \\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\",\"organisationInput\":{\"name\":\"example update\"}},\"operationName\":\"updateOrganisation\"}"
            },
            "created": 1582669647647,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582602092927,
            "method": "POST",
            "modified": 1582674792327,
            "name": "Update Organisation",
            "parameters": [],
            "parentId": "fld_c6c1f7028966415496d9bc9b36bb0fd7",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "req_18e3897d18504b41bb94ca907ae32d8f",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"query board($organisationId: ID!, $boardId: ID!) {\\n  board(organisationId: $organisationId, boardId: $boardId) {\\n    id\\n    name\\n    \\n    createdAt\\n    updatedAt\\n    tickets {\\n      name\\n      description\\n      status\\n    }  \\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\",\"boardId\":\"c9332cdc-a0bb-43ad-a6e2-e337c3fb4c8f\"},\"operationName\":\"board\"}"
            },
            "created": 1582670435040,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582552840739,
            "method": "POST",
            "modified": 1582678845274,
            "name": "board",
            "parameters": [],
            "parentId": "fld_8b31a7990db341d6907fd436603ef8a8",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_8b31a7990db341d6907fd436603ef8a8",
            "created": 1582670418630,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582670418630,
            "modified": 1582670418630,
            "name": "Query",
            "parentId": "fld_0d3fa2caa6c244a5a22080926547dff1",
            "_type": "request_group"
        },
        {
            "_id": "fld_0d3fa2caa6c244a5a22080926547dff1",
            "created": 1582669926601,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582667741741,
            "modified": 1582669930002,
            "name": "Boards",
            "parentId": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "_type": "request_group"
        },
        {
            "_id": "req_c67a171efc8a439bb678bcad080c918a",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"#To create a board don't pass an id\\nmutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {\\n  putBoard(organisationId: $organisationId, boardId: $boardId, input: $input) {\\n    id\\n    name\\n    \\n    createdAt\\n    updatedAt\\n    tickets {\\n      name\\n      description\\n      status\\n    }  \\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\",\"input\":{\"name\":\"example board\"}},\"operationName\":\"putBoard\"}"
            },
            "created": 1582669956816,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582569258135,
            "method": "POST",
            "modified": 1582674849758,
            "name": "put board",
            "parameters": [],
            "parentId": "fld_bcf782518d4a435990e4baba3f1c1421",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_bcf782518d4a435990e4baba3f1c1421",
            "created": 1582669936952,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582669936952,
            "modified": 1582669936952,
            "name": "Mutations",
            "parentId": "fld_0d3fa2caa6c244a5a22080926547dff1",
            "_type": "request_group"
        },
        {
            "_id": "req_83c2220376304690aeecc0014f951d02",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"query ticket($organisationId: ID!, $ticketId: ID!) {\\n  ticket(organisationId: $organisationId, ticketId: $ticketId) {\\n    id\\n    name\\n    description\\n    status\\n    visible\\n    board {\\n      name\\n    }\\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\",\"ticketId\":\"0ad62ca9-7770-4988-b480-037609b87b81\"},\"operationName\":\"ticket\"}"
            },
            "created": 1582670550839,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582552840739,
            "method": "POST",
            "modified": 1582674866263,
            "name": "ticket",
            "parameters": [],
            "parentId": "fld_e565790695a645e7ab65f217628b5a95",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_e565790695a645e7ab65f217628b5a95",
            "created": 1582670550835,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582670418630,
            "modified": 1582670550835,
            "name": "Query",
            "parentId": "fld_72f12d81a5904965be7a825efbff2c47",
            "_type": "request_group"
        },
        {
            "_id": "fld_72f12d81a5904965be7a825efbff2c47",
            "created": 1582670550797,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582405066972.5,
            "modified": 1582670550797,
            "name": "Tickets",
            "parentId": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "_type": "request_group"
        },
        {
            "_id": "req_ce5f62dd40144502a40fdd29ef578c71",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"#can't run as requires a websocket\\nsubscription ticketUpdates($organisationId: ID!) {\\n    ticketUpdates(organisationId: $organisationId) {\\n      name\\n      id\\n    }\\n  }\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\"},\"operationName\":\"ticketUpdates\"}"
            },
            "created": 1582680787549,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582552840739,
            "method": "POST",
            "modified": 1582680820027,
            "name": "ticketUpdates",
            "parameters": [],
            "parentId": "fld_b263c48d150b4cccbb58aa4d43ab4baa",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_b263c48d150b4cccbb58aa4d43ab4baa",
            "created": 1582680787540,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582670177791,
            "modified": 1582680787540,
            "name": "Subscriptions",
            "parentId": "fld_72f12d81a5904965be7a825efbff2c47",
            "_type": "request_group"
        },
        {
            "_id": "req_dba54b08f0f3494d990cc71ff04cafa8",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"#To create a new ticket don't pass an id\\nmutation putTicket($organisationId: ID!, $boardId: ID!, $ticketId: ID $input: TicketInput!) {\\n  putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: $ticketId, input: $input) {\\n    id\\n    name\\n    description\\n    status\\n    visible\\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\",\"boardId\":\"c9332cdc-a0bb-43ad-a6e2-e337c3fb4c8f\",\"input\":{\"name\":\"first ticket\",\"description\":\"implement UI for example\",\"status\":\"TODO\",\"visible\":true}},\"operationName\":\"putTicket\"}"
            },
            "created": 1582670550814,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582569258135,
            "method": "POST",
            "modified": 1582679195576,
            "name": "put ticket",
            "parameters": [],
            "parentId": "fld_ac624d8ed2674ae9bd6ab3bcfcd950ea",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "fld_ac624d8ed2674ae9bd6ab3bcfcd950ea",
            "created": 1582670550805,
            "description": "",
            "environment": {},
            "environmentPropertyOrder": null,
            "metaSortKey": -1582669936952,
            "modified": 1582670550805,
            "name": "Mutations",
            "parentId": "fld_72f12d81a5904965be7a825efbff2c47",
            "_type": "request_group"
        },
        {
            "_id": "req_0abf18519416427f8e949de98d51a0f7",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"#To create a new ticket don't pass an id\\nmutation deleteTicket($organisationId: ID!, $ticketId: ID!) {\\n  deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {\\n    id\\n    name\\n    description\\n    status\\n    visible\\n  }\\n}\",\"variables\":{\"organisationId\":\"806fb7b1-64fb-4ec1-853b-f4ac7554cc64\",\"ticketId\":\"fc017310-e593-4172-943d-218347a069dd\"},\"operationName\":\"deleteTicket\"}"
            },
            "created": 1582670802957,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582561049437,
            "method": "POST",
            "modified": 1582674864843,
            "name": "delete ticket",
            "parameters": [],
            "parentId": "fld_ac624d8ed2674ae9bd6ab3bcfcd950ea",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        },
        {
            "_id": "env_9164cc834d7e514321a87e6cffabcf5ba9595acc",
            "color": null,
            "created": 1582667642261,
            "data": {
                "auth": "5152fa08-1806-4514-9f66-730e9b59486e"
            },
            "dataPropertyOrder": {
                "&": [
                    "auth"
                ]
            },
            "isPrivate": false,
            "metaSortKey": 1582667642261,
            "modified": 1582675373110,
            "name": "Base Environment",
            "parentId": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "_type": "environment"
        },
        {
            "_id": "jar_9164cc834d7e514321a87e6cffabcf5ba9595acc",
            "cookies": [],
            "created": 1582667642269,
            "modified": 1582667642269,
            "name": "Default Jar",
            "parentId": "wrk_56690cf365bf41fbbfa33a2bdeaca021",
            "_type": "cookie_jar"
        },
        {
            "_id": "env_c61363a2ec074ada9f0a39f04de40cba",
            "color": null,
            "created": 1582675348182,
            "data": {
                "baseUrl": "https://###.execute-api.###.amazonaws.com/example-example-graphql-api"
            },
            "dataPropertyOrder": {
                "&": [
                    "baseUrl"
                ]
            },
            "isPrivate": false,
            "metaSortKey": 1582675348182,
            "modified": 1582686358359,
            "name": "aws",
            "parentId": "env_9164cc834d7e514321a87e6cffabcf5ba9595acc",
            "_type": "environment"
        },
        {
            "_id": "env_e1b0d3044bc342e78c77acd72a076fa0",
            "color": null,
            "created": 1582675364840,
            "data": {
                "baseUrl": "http://localhost:3000/graphql"
            },
            "dataPropertyOrder": {
                "&": [
                    "baseUrl"
                ]
            },
            "isPrivate": false,
            "metaSortKey": 1582675364840,
            "modified": 1582675382639,
            "name": "local",
            "parentId": "env_9164cc834d7e514321a87e6cffabcf5ba9595acc",
            "_type": "environment"
        },
        {
            "_id": "req_43b5d493de504482a05254269752da1d",
            "authentication": {},
            "body": {
                "mimeType": "application/graphql",
                "text": "{\"query\":\"mutation resetDatabase {\\n  resetDatabase}\"}"
            },
            "created": 1582668673666,
            "description": "",
            "headers": [
                {
                    "id": "pair_04863e5e3b0e490db4fcff9c70828eb8",
                    "name": "Content-Type",
                    "value": "application/json"
                },
                {
                    "description": "",
                    "id": "pair_d130745f81bd4427baf51c6708c91518",
                    "name": "Authorization",
                    "value": "{{ auth  }}"
                }
            ],
            "isPrivate": false,
            "metaSortKey": -1582273745007,
            "method": "POST",
            "modified": 1582686358735,
            "name": "Me",
            "parameters": [],
            "parentId": "fld_4bbc1a2aaccb4e409c8b947e27c77928",
            "settingDisableRenderRequestBody": false,
            "settingEncodeUrl": true,
            "settingFollowRedirects": "global",
            "settingRebuildPath": true,
            "settingSendCookies": true,
            "settingStoreCookies": true,
            "url": "{{ baseUrl  }}",
            "_type": "request"
        }
    ]
}