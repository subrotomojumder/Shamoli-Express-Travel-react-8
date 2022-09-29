const setStorageData = (data) => {
    localStorage.setItem('minute', data)
}
const getStorageData = () => {
    const stored = localStorage.getItem('minute');
    return stored;
}

export {
    setStorageData,
    getStorageData
}