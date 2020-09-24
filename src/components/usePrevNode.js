import TextNodes from "../components/content"

const usePrevNode = (value, TextNodes) => {
  const lastPath = value.length - 1
  for (let i = 0; i < TextNodes.length; i++) {
    if (value?.[lastPath]?.prevNodeId == TextNodes[i].nodeId) {
      return TextNodes[i]
    }
  }
}

export default usePrevNode
