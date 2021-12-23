const applicationState = {
    requests: [],
    plumbers: [],
    completions: []
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
            (servicePlumbers) => {
                // Store the external state in application state
                applicationState.plumbers = servicePlumbers
            }
        )
}

// getting the requests that is stored within applicationState and exporting the data
export const getRequest = () => {
    return applicationState.requests.sort((a,b) => (b.neededby - a.neededby) ? -1 : 1)
}

export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber => ({...plumber}))
}

export const getCompletions = () => {
    return applicationState.plumbers.map(completed => ({...completed}))
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

// fetch method that would deleted the request with the selected id
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const saveCompletion = (saveCompletion) => {
    const fetchCompletions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveCompletion)
    }
    const mainContainer = document.querySelector("#container")


    return fetch(`${API}/completions/`, fetchCompletions)
        .then(response => response.json())
        .then(() => {
            //userServiceRequest.POST -> PHP not JS 
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

export const fetchCompletions = () => {
        return fetch(`${API}/completions/`)
        .then(response => response.json())
        .then(
            (completedRequests) => {
                // Store the external state in application state
                applicationState.completions = completedRequests
                
            }
        )
}
