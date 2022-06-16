function isCoprime(x, y) {
    let arrX = []
    let arrY = []
    for (let i = 1; i <= x; i++) {arrX.push(i)}

    let xFactors = arrX.filter(a => x % a === 0)

    for (let i = 1; i <= y; i++) {arrY.push(i)}
    let yFactors = arrY.filter(a => y % a === 0)

    const intersection = xFactors.filter(element => yFactors.includes(element))

    return intersection.length === 1
  }

