(()=>{
    // const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10]
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]

    const villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

    numbers.push(11)
    // numbers.push(true)

    console.log(numbers)

    villians.forEach(c => console.log( c.toUpperCase() ))
})()