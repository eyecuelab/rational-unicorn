import TextNodes from "../components/content"

const useNextNode = (value) => {

    for (let i = 0; i < TextNodes.length; i++) {
        if (value.nextNodeId == TextNodes[i].nodeId) {
        return TextNodes[i];
        }
    }    
}

export default useNextNode;