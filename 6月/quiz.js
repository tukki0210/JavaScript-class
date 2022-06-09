// 最初から動作する部分

// 選択肢の配列
const answers = ['富士山', '剣岳', '北岳', '高山'];

// 選択肢のIDの配列
const answerIDs = ['answerA', 'answerB', 'answerC', 'answerD'];

for (let i = 0; i < 4; i++) {
    document.getElementById(answerIDs[i]).textContent = answers[i]
}

// 同じ内容だがデータの形が悪いので扱いにくい
// const yokunaiArray =['富士山','剣岳','北岳','高山','answerA','answerB','answerC','answerD']

// for (let i=0; i<4; i++){
//     document.getElementById(yokunaiArray[i]).textContent = yokunaiArray[i + 4]
// }

const seikai = "〇正解"
const fuseikai = "×不正解"

// 共通部分をまとめるのが関数
// 関数名は動詞＋名詞でつけることが多い

// 引数idNameを設定して、A,B,Dを当てはめる
const makeFuseikai = function (idName) {
    document.getElementById(idName).addEventListener('click', function () {
        this.textContent = fuseikai;
        this.setAttribute('class', 'fuseikai');
    })
}

const makeSeikai = function (idName) {
    document.getElementById(idName).addEventListener('click', function () {
        this.textContent = seikai
    })
}

// 関数の実行
makeFuseikai('answerA');
makeFuseikai('answerB');
makeSeikai('answerC');
makeFuseikai('answerD');


// クリックイベントが起こったときに動作する部分
// document.getElementById('answerA').addEventListener('click', function () {
//     // this.textContent = "不正解"
//     this.textContent = fuseikai;
//     this.setAttribute('class', 'fuseikai');
// })

// document.getElementById('answerB').addEventListener('click', function () {
//     // this.textContent = "不正解"
//     this.textContent = fuseikai
//     this.setAttribute('class', 'fuseikai')
// })

document.getElementById('answerC').addEventListener('click', function () {
    // this.textContent = "正解"
    this.textContent = seikai
})

// document.getElementById('answerD').addEventListener('click', function () {
//     // this.textContent = "不正解"
//     this.textContent = fuseikai
//     this.setAttribute('class', 'fuseikai')
// })