import convert from 'color-convert'

export const rgb = (color) => {
  const rgbColor = convert.hex.rgb(color)
  return `${rgbColor.join(', ')}`
}

export const hex = (color) => `#${color}`

export const hsl = (color) => {
  const hslColor = convert.hex.hsl(color)
  return `${hslColor[0]}, ${hslColor[1]}%, ${hslColor[2]}%`
}

export const isLight = color => convert.hex.hsl(color)[2] >= 90
