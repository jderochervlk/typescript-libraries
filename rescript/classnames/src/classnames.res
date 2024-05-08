let classnames = (classes, ~conditional=?) => {
  let classes = classes->Array.copy
  switch conditional {
  | Some(conditional) => {
      let keys = conditional->Object.keysToArray
      keys->Array.forEach(key =>
        conditional
        ->Object.get(key)
        ->Option.filter(val => val === true)
        ->Option.forEach(_ => classes->Array.push(key))
      )
    }
  | None => ()
  }

  classes->Array.join(" ")
}
