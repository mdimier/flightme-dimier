import React, { Component } from 'react'

export default class ItemListContainer extends Component {
    render() {
    const Vuelos = [
        {id: 1,
        plane: "C-150",
        price: 80,
        pax: 1},

        {id: 2,
        plane: "C-172",
        price: 100,
        pax: 3},

        {id: 3,
        plane: "PA-34",
        price: 200,
        pax: 5,
        },
        
    ]
    const Vuelo = Vuelos.map( avion => <h2>Vuelo de Bautismo en {avion.plane}. Vuelan {avion.pax} Pasajeros. Valor U$D {avion.price}.</h2>)
    return <div class="m-2 p-2 ">{Vuelo}</div>
}}
