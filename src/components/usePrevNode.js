import TextNodes from "../components/content"

const usePrevNode = (value) => {

    console.log(value.length, "____value.length____")

    const lastPath = value.length -1;
    for (let i = 0; i < TextNodes.length; i++) {
        if (value?.[lastPath]?.prevNodeId == TextNodes[i].nodeId) {
            return ( 
                TextNodes[i]
            ) 
        } else {
            window.location = 'http://localhost:8000/';
        }
    } 
}

export default usePrevNode;