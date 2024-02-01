const options = { day: 'numeric', month: 'long', year: 'numeric' };
const fullTimeOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // Use 24-hour format
};
const DateFormattMonthYear = new Intl.DateTimeFormat('ru', { month: 'long', year: 'numeric' });
const DateFormatDayMonthYear = new Intl.DateTimeFormat('ru', options);
const DateFormatFull = new Intl.DateTimeFormat('ru', fullTimeOptions);

const dateFormatterMonthYear = (date) => {
    return DateFormattMonthYear.format(new Date(date))
}

const dateFormatterDayMonthYear = (date) => {
    return DateFormatDayMonthYear.format(new Date(date))
}

const dateFormatterFullDateAndTime = (date) => {
    return DateFormatFull.format(new Date(date))
}

const formatAgeAndGender = (dateString, gender) => {
    const birthDate = new Date(dateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    const formattedBirthday = birthDate.toLocaleDateString('ru-RU', options);

    const genderText = gender === 'Мужской' ? 'родился' : 'родилась';
    return `${age} лет, ${genderText} ${formattedBirthday}`;
}

const formatAge = (dateString) => {
    const birthDate = new Date(dateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return `${age} лет`;
}

const formatPhoneNumber = (phoneNumber) => {
    // Remove all non-digit characters from the phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    // Use regular expressions to format the cleaned number
    const regex = /^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/;
    const match = cleanedNumber.match(regex);

    if (match) {
        const formattedNumber = `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
        return formattedNumber;
    } else {
        // If the input is not a valid phone number, return it as is
        return phoneNumber;
    }
};

const formatNumber = (number) => {
    return number.toLocaleString('en-US').replace(/,/g, ' ');
}

const calculateYearMonthDifference = (startDate, endDate) => {
    let start = new Date(startDate);
    let end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearString = years > 0 ? `${years} год${years === 1 ? '' : 'a'}` : '';
    const monthString = months > 0 ? `${months} месяц${months === 1 ? '' : 'а'}` : '';

    if (yearString && monthString) {
        return `${yearString} ${monthString}`;
    } else {
        return yearString || monthString;
    }
}

const getFullYear = (dateString) => {
    return (new Date(dateString)).getFullYear()
}

module.exports = {
    dateFormatterMonthYear,
    formatAgeAndGender,
    formatPhoneNumber,
    formatNumber,
    calculateYearMonthDifference,
    getFullYear,
    dateFormatterDayMonthYear,
    dateFormatterFullDateAndTime,
    formatAge,
}