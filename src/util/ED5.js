export const createArray = (length) => {
    const newArray = Array.from({ length: length }, (value, index) => index)

    return newArray
}