function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  let line = katzDeli.length;

  return `Welcome, ${name}. You are number ${line} in line.`
}


function nowServing(deliLine) {
  let sentence = `Currently serving ${deliLine}.`
    if (deliLine <= 1) {
      return "There is nobody waiting to be served!"
    } else {
      return deliLine.shift()
      return `Currently serving ${deliLine[0]}.`

    }
}
