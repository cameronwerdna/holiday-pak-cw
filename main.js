function pak(s){
    let newStr = ''
    if (s.trim() == '') {
      return 'empty string'
    } else {
      return s.split(' ').join(' pak ')
    }
  }


console.log(pak(' ')) // => empty string
console.log(pak('hey there man how\'s it goin')) // => hey pak there pak man pak how's pak it pak goin
console.log(pak('where pak is pak all the sunshine')) // => where pak pak pak is pak pak pak all pak the pak sunshine
