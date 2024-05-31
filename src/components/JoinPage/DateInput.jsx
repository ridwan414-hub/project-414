import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { getYear, getMonth } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ className, title }) => {
  const [startDate, setStartDate] = useState(new Date());
  const currentYear = getYear(new Date());
  const years = Array.from(
    { length: currentYear - 1990 + 1 },
    (_, i) => 1990 + i
  );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <div className={`sm:col-span-3 ${className}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="mt-2">
        <ReactDatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {'<'}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {'>'}
              </button>
            </div>
          )}
          required
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable
          placeholderText="Click to pick a date"
        />
      </div>
    </div>
  );
};

export default DateInput;
