import { getRequest} from "./dataAccess.js";

const convertRequestToListElement = (obj) => {
    return `<li>${obj.description}</li>`
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