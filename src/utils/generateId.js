export const generateId = (data = [{id: 1},{id: 2},{id: 3},]) => {
    const ids = data.reduce((prev, curr, index) => {
        const onlyId = curr.id
        return [...prev, onlyId]
    }, [])
    return Math.max(...ids) + 1
}