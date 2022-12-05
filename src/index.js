import "./styles.css";

const onClickAdd = () => {
  //alert(); //動作確認のために必要
  //テキストボックスの値を取得し、その後テキストボックスを初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";
  //console.log(li);

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;
  //console.log(p);

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された「完了」ボタンの親タグ（li）を未完了リストから削除
    deleteFormIncompleteList(completeButton.parentNode);

    //完了したTODOに要素を追加する
    const addTarget = completeButton.parentNode;
    //TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;
    //console.log(text);
    //liタグを初期化
    addTarget.textContent = null;
    //console.log(addTarget); //空のliタグ

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    //console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  //console.log(completeButton); //<button>完了</button>

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された「削除」ボタンの親タグ（li）を未完了リストから削除
    deleteFormIncompleteList(deleteButton.parentNode);
  });
  //console.log(deleteButton); //<button>削除</button>

  //liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  //console.log(div);

  //未完了リストに追加する
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素を削除する
const deleteFormIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
