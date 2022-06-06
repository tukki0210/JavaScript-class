let count = 0

document.getElementById('sikaku').addEventListener('click', function () {
    // クリックしたら動く処理

    // textContent には、文字（テキスト）が入る
    console.log(this.textContent)

    if (count % 2 === 0) {
        // CSSを書き換えている
        this.textContent = "〇"
        this.style.color = "red"
        this.style.fontSize = "60px"
        this.style.padding = "10px"

    } else {
        this.textContent = "×"
        this.style.color = "blue"
        this.style.fontSize = "60px"
        this.style.padding = "10px"

    }


    // else if　を使って、countが1,2,3のときにbackgroundColorを別の色に変える

    console.log(count)

    // クリックするたびに、countを増やす（インクリメント演算）
    // count = count + 1
    ++count
})



