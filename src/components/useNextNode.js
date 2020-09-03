import TextNodes from "../components/content"

const useNextNode = (value) => {

    // set requiredState options
    // if (!!requiredState) {
    //   setRequiredState(requiredState);
    // }
    // choose next node to use
    for (let i = 0; i < TextNodes.length; i++) {
        if (value.nextNodeId == TextNodes[i].nodeId) {
        return TextNodes[i];
        }
    }    
}

export default useNextNode;