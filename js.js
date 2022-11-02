app.use('/js', express.static(path.join(__dirname, 'public/main.js')))


function add (num1, num2) {
    let answer = 0
    answer = num1 + num2
    console.log(answer)
}

add(6, 4)