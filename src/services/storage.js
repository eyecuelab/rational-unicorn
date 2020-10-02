
export const isBrowser = () => typeof window !== "undefined"

export function getResults() {
    if(isBrowser()){
        const string = window?.localStorage?.getItem("results")
        if(string){
            return JSON.parse(string)
        }

        return []
    }

    return []
}

export async function setResults (newPath) {
    if(isBrowser()){
        const newString = await JSON.stringify(newPath)
        await window.localStorage.setItem("results", newString)
        return true;
    }
    console.warn("tried to set results without a window")
    return true;
}

export function clearStorage() {
    if(isBrowser()){
        return window.localStorage.clear()
    }
    return []
}