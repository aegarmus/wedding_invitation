export const formatDate = (dateString, separator) => {
    const [year, month, day] = dateString.split(separator);
    return `${day}.${month}.${year}`;
}