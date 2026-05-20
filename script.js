function askGod() {
    // 1. 神の決断メッセージを用意する（好きな言葉に自由に変えてOK！）
    const answers = [
        "眠たいなら寝ろ！",
        "結局決めるのは君だよ…",
        "こんにちは。神です。でも、僕は神の世界でニートしてるので他の神にお願いして〜",
        "めんどくさいよね。わかる、わかる。",
        "腹減ったなら飯を食え。それが幸せってもんだ。",
        "クリックしたお前は暇人！！！！",
        "神に頼み事！？まずは、お金払ってからじゃ！！",
        "あはははは、えへへへ…ん？なんか用？"
    ];

    // 2. 画面をピカッと光らせる（CSSのアニメーションを発動させる）
    const flash = document.getElementById("flash-overlay");
    
    // 一度アニメーションのクラスを消して、もう一度つけることで、ボタンを押すたびに何度も光るようにします
    flash.classList.remove("flash-animation");
    
    // 魔法の1行：ブラウザに「リフレッシュ（再計算）」をさせて、アニメーションをリセットする
    void flash.offsetWidth; 
    
    // 再び光らせるクラスを合体！
    flash.classList.add("flash-animation");

    // 3. ランダムでメッセージを1つ選ぶ
    const randomIndex = Math.floor(Math.random() * answers.length);
    const selectedAnswer = answers[randomIndex];

    // 4. 画面の文字を書き換える
    document.getElementById("answer-text").innerText = selectedAnswer;
}