export const calculateTimeLeft = (releaseDate, currentDate) => {
    const differenceTime = releaseDate - currentDate

    if( differenceTime <= 0) return null;

    const days = Math.floor(differenceTime / (1000 * 60 * 60 * 24 ))
    const hours = Math.floor((differenceTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((differenceTime / (1000 * 60)) % 60)
    const seconds = Math.floor((differenceTime / 1000) % 60)

    return {
        days,
        hours,
        minutes,
        seconds
    }

}