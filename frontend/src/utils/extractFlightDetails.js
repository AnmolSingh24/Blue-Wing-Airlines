export const extractFlightDetails = (dateString) => {
    let date = new Date(dateString);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    let formattedTime = `${hours}:${minutes}`;
    return formattedTime;
}