import { fetchRequests, fetchCompletions, fetchPlumbers } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            fetchPlumbers().then(
        ()=> {
            fetchCompletions().then(
        ()=> {
            mainContainer.innerHTML = SinkRepair()
        }
    )
    }
    )
}
)

}
render()

mainContainer.addEventListener(
    "stateChanged",
    customElement => {
        render()
    }
)

