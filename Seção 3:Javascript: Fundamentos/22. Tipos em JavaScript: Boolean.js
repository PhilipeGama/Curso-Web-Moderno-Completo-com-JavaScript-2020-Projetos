console.log('\ncomeço')
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('\nos verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!-[])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 0))

console.log('\nos falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\npra finalizar... ')
console.log(!!('' || null || 'epa' || 'olá'))
console.log('' || null || 'epa' || 'olá')

let nome = ''
console.log(nome || 'desconhecido')