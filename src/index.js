import "./styles.css";

const onClickAdd = () => {
  //alert(); //動作確認のために必要
  //テキストボックスの値を取得し、その後テキストボックスを初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  console.log(li);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  console.log(div);

  //未完了リストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
