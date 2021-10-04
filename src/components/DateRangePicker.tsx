import React, { useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { Stack, TextField } from '@mui/material';

const DateRangePicker = () => {

    const [date, setDate] = useState<Array<Date | null>>([null, null]);

    let now = new Date();

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={1}>
                    <DatePicker
                    label="From"
                    shouldDisableDate={(day) => {
                        return day !== null && (day.getTime() > now.getTime() || (date[1] !== null && day.getTime() > date[1].getTime()));
                    }}
                    value={date[0]}
                    onChange={(newValue) => {
                        newValue?.setHours(0, 0, 0, 0);
                        setDate([newValue, date[1]]);
                    }}
                    renderInput={(params) => <TextField {...params} id="Date" autoComplete="off" />}
                    />
                    <DatePicker
                    label="To"
                    shouldDisableDate={(day) => {
                        return day !== null && (day.getTime() > now.getTime() || (date[0] !== null && day.getTime() < date[0].getTime()));
                    }}
                    value={date[1]}
                    onChange={(newValue) => {
                        newValue?.setHours(0, 0, 0, 0);
                        setDate([date[0], newValue]);
                    }}
                    renderInput={(params) => <TextField {...params} id="Date" autoComplete="off" />}
                    />
                </Stack>
            </LocalizationProvider>
        </div>
    )
}

export default DateRangePicker
