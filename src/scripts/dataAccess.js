const applicationState = {
    requests: [],
    plumbers: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"


// Fetching the request from the json file and storing them into applicationState
export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (Plumbers) => {
                // Store the external state in application state
                applicationState.plumbers = Plumbers
            }
        )
}

// getting the requests that is stored within applicationState and exporting the data
export const getRequest = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber => ({...plumber}))
}

// sending a request that will take in some data and display in on the screen
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

// export const saveCompletion = (saveCompletion) => {
    
// }

// export const postCompletions = (postCompletions) => {
//     const postCompletedOrders = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(postCompletions)
//     }


//     return fetch(`${API}/completions`, postCompletedOrders)
//         .then(response => response.json())
//         .then(() => {
//             mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//         })
// }
