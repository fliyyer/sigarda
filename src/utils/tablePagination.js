const cvTablePagination = (dataArray = [], maxValue) => {
    const arrayPagination = []
    for (let i = 0; i < dataArray.length; i += maxValue) {
        const arr = []
        const arrFix = []
        for (let k = i; k < i + maxValue; k += 1) {
            arr.push(dataArray[k])
        }
        for (let j = 0; j < arr.length; j += 1) {
            const validArr = arr[j]
            if (validArr) {
                arrFix.push(validArr)
            }
        }
        arrayPagination.push(arrFix)
    }
    return arrayPagination
}

export default cvTablePagination;