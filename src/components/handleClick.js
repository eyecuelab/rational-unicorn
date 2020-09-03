import TextNodes from "../components/content"

const HandleClick = (props) => {

    const [nodeState, setNodeState] = useState(TextNodes[0])
    // set requiredState options
    // if (!!requiredState) {
    //   setRequiredState(requiredState);
    // }
    // choose next node to use
    for (let i = 0; i < TextNodes.length; i++) {
        if (option.nextNodeId == TextNodes[i].nodeId) {
        // set that node to nodeState
        setNodeState(TextNodes[i])
        return
        }
    }    
}

export default HandleClick;