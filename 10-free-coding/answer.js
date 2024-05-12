const drawAscii = n => {
  // draw increasing number of *
  for (let i= 1; i<= n; i++) {
      console.log(' '.repeat(n-i)+'*'.repeat(2*i -1))
  }
  // (optional) draw decreasing number of *
  for (let i= n; i>= 1; i--) {
    console.log(' '.repeat(n-i)+'*'.repeat(2*i -1))
  }
}

drawAscii(13)