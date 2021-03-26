import React from 'react'
import { render } from '@testing-library/react';
import ForecastItem from './ForecastItem';

test('Forecast item render', async () => {
    const {findByText} = render(<ForecastItem temperature={10} state="sunny" weekDay="Lunes" hour={4}/>);
    const temp = await findByText(/10/);
    const weekDay = await findByText(/Lunes/);
    const hour = await findByText(/4/);

    expect(temp).toHaveTextContent("10");
    expect(weekDay).toHaveTextContent("Lunes");
    expect(hour).toHaveTextContent("4");


})