const roots = document.querySelector(':root')
const btn = document.querySelector('#btn')

const h = () => Math.round(Math.random() * 1000)
const s = () => Math.round(Math.random() * 100)
const l = () => {
    const gotedValue = Math.round(Math.random() * 100)
    if (gotedValue > 80) {
        return 80
    }
    else if (gotedValue < 20) {
        return 20
    }
    else return gotedValue

}

const changeColor = () => {
    roots.style.setProperty('--text', `hsl(${h()}, ${s()}%, ${l() > 30 && 30}%)`)
    roots.style.setProperty('--textTwo', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--background', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--primary', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--secondary', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--tertiary', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--accent', `hsl(${h()}, ${s()}%, ${l()}%)`)
    roots.style.setProperty('--btnBgc', `hsl(${h()}, ${s()}%, ${l() < 50 && 50}%)`)
}

btn.addEventListener('click', changeColor)
setInterval(changeColor, 4000)
