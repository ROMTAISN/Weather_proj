import * as React from "react";


const DateSelector = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = React.useState('');
    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        onDateChange(date);
    };

    return (
        <div>
            <label htmlFor="date">
                Выберите дату:
            </label>
            <input type="date" id='date' value={selectedDate} onChange={handleDateChange} />
        </div>
    );
};

export default DateSelector;