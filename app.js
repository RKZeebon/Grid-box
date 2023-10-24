const roots = document.querySelector(':root')
const btn = document.querySelector('#btn')

const h = () => Math.round(Math.random() * 1000)
const s = () => Math.round(Math.random() * 100)
const l = () => {
    const gotedValue = Math.round(Math.random() * 100)
    return gotedValue > 80 ? 80 : gotedValue < 20 ? 20 : gotedValue
}

const changeColor = () => {
    roots.style.setProperty('--text', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--textTwo', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--background', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--primary', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--secondary', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--tertiary', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--accent', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--btnBgc', `hsl(${h()}, ${s()}%, ${l()}%)`)
}

btn.addEventListener('click', changeColor)
setInterval(changeColor, 3000)
