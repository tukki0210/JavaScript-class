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

// 不正解の関数
const makeFuseikai = (idName) => {

    const fuseikaiEl = document.getElementById(idName);

    fuseikaiEl.addEventListener('click', () => {
        fuseikaiEl.textContent = fuseikai;
        fuseikaiEl.setAttribute('class', 'fuseikai');
    })
}

// 正解の関数
const makeSeikai = function (idName) {
    document.getElementById(idName).addEventListener('click', function () {
        this.textContent = seikai;
        this.setAttribute('class', 'seikai');
    })
}

// 短くできるけど、分かりにくくなるかも
const makeAnswer = (idName, answer) => {
    const answerEl = document.getElementById(idName);

    // 名前を付けて外に持ってくる
    const answerChange = () => {
        answerEl.textContent = answer;
        answerEl.setAttribute('class', answer);
    }

    answerEl.addEventListener('click', answerChange)
}

makeAnswer('answerA', 'fuseikai');
makeAnswer('answerB', 'fuseikai');
makeAnswer('answerC', 'seikai');
makeAnswer('answerD', 'fuseikai');

setTimeout(function () {
    document.getElementById('mondai').textContent = '終了';
}, 5000);

