let str = "Вот, что мне хотелось бы сказать на эту тему:"
const maxlenght = 19

if (str.length > maxlenght) {
    str = str.slice(0, maxlenght) + "..."
    console.log(str)
} else {
    console.log(str)
}