const drawAscii = n => {
    for (let i= 1; i<= n; i++) {
        console.log(' '.repeat(n-i)+'*'.repeat(2*i -1))
    }
}
drawAscii(13)