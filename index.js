function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  let line = katzDeli.length;

  return `Welcome, ${name}. You are number ${line} in line.`
}


function nowServing(deliLine) {
    if (deliLine <= 0) {
      return "There is nobody waiting to be served!"
    } else {
      deliLine.splice(1, 2)
      return `Currently serving ${deliLine}.`

    }
}
