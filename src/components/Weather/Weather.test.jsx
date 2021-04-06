import React from 'react'
import { render } from '@testing-library/react'
import Wheater  from './Weather' //SUT SUBJECT UNDER TESTING
import '@testing-library/jest-dom/extend-expect'

test("Weather render", async ()=>{
    const {findByRole} = render(<Wheater temperature={10} state="clear"/>);
    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
});
