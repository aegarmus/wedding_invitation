export const calculateTimeLeft = (releaseDate, currentDate) => {
    const differenceTime = releaseDate - currentDate

    if( differenceTime <= 0) return null;

    const days = Math.floor(differenceTime / (1000 * 60 * 60 * 24 ))
    const hours = Math.floor((differenceTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((differenceTime / (1000 * 60)) % 60)
    const seconds = Math.floor((differenceTime / 1000) % 60)

    return {
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
    };

}

export const updateTimerLeft = (timeLeft, realeaseDate ,currentTime, isLoaded) => {
    const calculatedTime = calculateTimeLeft(realeaseDate, currentTime);

    if(calculatedTime) {
        timeLeft.value = calculatedTime;
        isLoaded.value = true;
    }
}