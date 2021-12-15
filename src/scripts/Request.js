import { getRequest} from "./dataAccess.js";
import { deleteRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


const convertRequestToListElement = (request) => {
    return `
        <li>${request.description}
        <button class="request_delete"
            id="request--${request.id}">
            Delete
        </button>
    </li>`
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