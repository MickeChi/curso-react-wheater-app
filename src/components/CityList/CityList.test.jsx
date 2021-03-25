import CityList from "./CityList";
import { render, fireEvent } from '@testing-library/react'

const cities = [
    {city: "Mérida", country: "México"},
    {city: "Monterrey", country: "México"},
    {city: "Guadalajaraa", country: "México"}
]

test("CityList renders", async () =>{
    const fnClickOnItem = jest.fn();
    const {findAllByRole} =  render(<CityList cities={cities} onClickCity={fnClickOnItem}/>);
    const items = await findAllByRole("listitem");
    expect(items).toHaveLength(3);

})


test("CityList click on item", async () =>{
    //creamos una funcion mock
    const fnClickOnItem = jest.fn();
    const {findAllByRole} =  render(<CityList cities={cities} onClickCity={fnClickOnItem}/>);
    const items = await findAllByRole("listitem");

    //Simulamos la accion click
    fireEvent.click(items[0])
    //Que se debe evaluar? Que se de click en un elemento del item city list
    expect(fnClickOnItem).toHaveBeenCalledTimes(1);



})
