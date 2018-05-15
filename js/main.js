! function () {
  function writeCode(prefix, code, fn) {
    let codeContainer = document.querySelector('#code')
    let codeStyle = document.querySelector('#codeStyle')
    let n = 0
    let id = setInterval(() => {
      n += 1
      codeContainer.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css);
      codeStyle.innerHTML = code.substring(0, n)
      codeContainer.scrollTop = codeContainer.scrollHeight
      if (n >= code.length) {
        clearInterval(id)
        fn && fn.call()
      }
    }, 50)
  }
  let code = `
  /*
   * 首先，需要准备皮卡丘的皮 
   */
  #preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
  }
  .wrapper {
    width: 100%;
    height: 180px;
    position: relative;
  }

  /*
   * 接下来，画皮卡丘的鼻子 
   */
  .nose {
    position: absolute;
    border: 11px solid black;
    border-radius: 50%;
    border-color: black transparent transparent transparent;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
  }

  /*
   * 接下来，画皮卡丘的眼睛 
   */
  .eye {
    width: 50px;
    height: 50px;
    background: #2E2E2E;
    border-radius: 50%;
    position: absolute;
    border: 2px solid #000;
  }

  /*
   * 将眼睛放到正确的位置
   */
  .eye.left {
    right: 50%;
    margin-right: 90px;
  }
  .eye.right {
    left: 50%;
    margin-left: 90px;
  }

  /*
   * 眼睛里面的珠子
   */
  .eye::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    left: 6px;
    top: -1px;
  }

  /*
   * 然后，画皮卡丘的脸
   */
  .face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    top: 85px;
  }

  /*
   * 将脸放到正确的位置
   */
  .face.left {
    right: 50%;
    margin-right: 116px;
  }
  .face.right {
    left: 50%;
    margin-left: 116px;
  }

  /*
   * 然后，画皮卡丘的上嘴唇
   */
  .upperLip {
    width: 80px;
    height: 24px;
    background: #FEE433;
    border: 2px solid black;
    position: absolute;
    top: 49px;
    border-top: none;
  }
  .upperLip.left {
    right: 50%;
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
  } 
  .upperLip.right {
    left: 50%;
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
  }

  /*
   * 然后，画皮卡丘的下嘴唇
   */
  .lowerLip-wrapper {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    overflow: hidden;
    height: 122px;
    width: 300px;
  }
  
  .lowerLip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
  }

  /*
   * 然后，画皮卡丘的舌头
   */
  .lowerLip::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background: #FC4A62;
    border-radius: 50%;
  }

  /*
   * 好了，这只皮卡丘送给你
   */
  `

  writeCode('', code)
}.call()