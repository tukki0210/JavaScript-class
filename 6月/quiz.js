// 最初から動作する部分

// 選択肢の配列
const answers = ['富士山', '剣岳', '北岳', '高山'];

// 選択肢のIDの配列
const answerIDs = ['answerA', 'answerB', 'answerC', 'answerD'];

for (let i = 0; i < 4; i++) {
    document.getElementById(answerIDs[i]).textContent = answers[i]
}


const seikai = "〇正解"
const fuseikai = "×不正解"

// 共通部分をまとめるのが関数
// 関数名は動詞＋名詞でつけることが多い

// 不正解だったときの関数
// 引数idNameを設定して、A,B,Dを当てはめる
const makeFuseikai = function (idName) {
    document.getElementById(idName).addEventListener('click', function () {
        this.textContent = fuseikai;
        this.setAttribute('class', 'fuseikai');
    })
}

// 正解のときの関数
const makeSeikai = function (idName) {
    document.getElementById(idName).addEventListener('click', function () {
        this.textContent = seikai;
        this.setAttribute('class','seikai');
    })
}

// 短くできるけど、分かりにくくなるかも
const makeAnswer = function (idName, answer){
    document.getElementById(idName).addEventListener('click', function () {
        this.textContent = answer;
        this.setAttribute('class',answer);
    })
}

// 関数の実行
// makeFuseikai('answerA');
// makeFuseikai('answerB');
// makeSeikai('answerC');
// makeFuseikai('answerD');

makeAnswer('answerA','fuseikai');
makeAnswer('answerB','fuseikai');
makeAnswer('answerC','seikai');
makeAnswer('answerD','fuseikai');

// a 5秒が来たら動くプログラム
setTimeout(function(){
    console.log('5秒立ったよ！')
},5000);

// b 問題文のテキストを終了に変える
// 指定した要素（element）.textContent で文字を変更できる
// document.getElementById('mondai').textContent = '終了';

// aとbを組み合わせる
setTimeout(function(){
    document.getElementById('mondai').textContent = '終了';
},5000);

document.querySelector('form').setAttribute('action','https://www.wana.com')