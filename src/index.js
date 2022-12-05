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
  //console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  //console.log(completeButton); //<button>完了</button>

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });
  //console.log(deleteButton); //<button>削除</button>

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(div);

  //未完了リストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
