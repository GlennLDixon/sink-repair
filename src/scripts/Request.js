import { getRequest} from "./dataAccess.js";
import { deleteRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            // change name to requests    
            const orders = {
                requestId: 1,
                plumberId: 1,
                date_created: 1614659931693
            }
            
            const completion = { }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)


const convertRequestToListElement = (request) => {
    let html = `
        <li>${request.description}
        <button class="request_delete"
            id="request--${request.id}">
            Delete
        </button>
    </li>`

    html += `<select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
    </select>`

    return html
}

export const Requests = () => {
    const requests = getRequest()
    
    let html = `
    <ul>
    ${
        requests.map(convertRequestToListElement).join("")
    }
    </ul>
    `
    return html

}
