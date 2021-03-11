import React from 'react'
import styled from 'styled-components';

//const $root = document.getElementById('root')

const menu = [
    { 
        text: 'Home', 
        path: '/'
    }, 
    {
        text: 'Vogais', 
        path: '/vogais'
    },
    {
        text: 'Consoantes',
        path: '/consoantes'
    }
]

const Menu = () => { 
    let menuItems = ''

    menu.map((item) => {
        return (`<li><a href="${item.path}">${item.text}</a></li>`)
    }).forEach(item => menuItems += item)
        
    const element = `
        <ul> 
            ${menuItems}
        </ul> 
    `
}

export default Menu


