function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  let line = katzDeli.length;

  return `Welcome, ${name}. You are number ${line} in line.`
}


function nowServing(deliLine) {
    if (deliLine <= 1) {
      return "There is nobody waiting to be served!"
    } else {
      return `Currently serving ${deliLine}.`

    }
}
