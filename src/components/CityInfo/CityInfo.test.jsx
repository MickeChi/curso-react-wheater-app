import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT SUBJECT UNDER TESTING


test("CityInfo render", async()=>{
    // AAA
    // ARANGE : LO NECESARIO PARA EJECUTAR EL TEST
    // ACT: EJECUTAR EL TEST
    const city = "Mérida";
    const country = "México";
        //RENDER: Renderiza el componente y retorna funriones de utilidad
        const {findAllByRole} = render(<CityInfo city={city} country={country}/>)
    // ASSERT: REVISAR LOS RESULTADOS
        //Analozamos el estado en Assert}
        //Buscamos todos los componentes de tipo heading (H1, H2, H3)
        const cityAndCountryComponents = await findAllByRole("heading");

        expect(cityAndCountryComponents[0]).toHaveTextContent(city);
        expect(cityAndCountryComponents[1]).toHaveTextContent(country);



});
