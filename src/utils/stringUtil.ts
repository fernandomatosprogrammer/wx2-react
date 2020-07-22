import moment from "moment";

const emailIsValid = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const getDatetimeString = (value) => value ? moment(value).format('DD/MM/YYYY hh:mm') : ''

export default {
    emailIsValid,
    getDatetimeString
}