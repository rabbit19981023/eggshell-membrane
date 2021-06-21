const RegisterPage: string = `
  <style>
    * {
      box-sizing: border-box;
    }

    form {
      margin-top: 3rem;
    }

    /* Add padding to containers */
    .container {
      width: 760px;
      max-width: 90%;
      padding: 1rem 0;
      background-color: white;
      border-radius: 5px;
    }

    /* Full-width input fields */
    input[type=text],
    input[type=password] {
      float: center;
      width: 80%;
      padding: 15px;
      margin: 5px 0 22px 0;
      display: inline-block;
      border: none;
      background: #f1f1f1;
    }

    input[type=text]:focus,
    input[type=password]:focus {
      background-color: #ddd;
      outline: none;
    }


    /* Overwrite default styles of hr */
    hr {
      border: 1px solid #f1f1f1;
      margin-bottom: 25px;
    }

    /* Set a style for the submit button */
    .registerbtn {
      background-color: #04AA6D;
      color: white;
      padding: 16px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 80%;
      opacity: 0.9;
    }

    .registerbtn:hover {
      opacity: 1;
    }

    /* Add a blue text color to links */
    a {
      color: dodgerblue;
    }

    /* Set a grey background color and center the text of the "sign in" section */
    .signin {
      text-align: center;
      margin: 1rem 1.5rem 0;
      background-color: #f1f1f1;
    }
  </style>
  <form>
    <div class="container">
      <h1>&emsp;註冊帳號</h1>
      <p>&emsp;&emsp;輸入以下資料以完成註冊。</p>
      <hr>

      <label for="email">&emsp;&emsp;&emsp;&emsp;&emsp;<b>電子郵件地址</label>
      <center><input type="text" placeholder="輸入您的電子郵件地址。" name="email" id="email" required></center>

      <label for="psw">&emsp;&emsp;&emsp;&emsp;&emsp;<b>建立密碼</b></label>
      <center><input type="password" placeholder="建立密碼。" name="psw" id="psw" required></center>

      <label for="psw-repeat">&emsp;&emsp;&emsp;&emsp;&emsp;<b>確認密碼</b></label>
      <center><input type="password" placeholder="再次輸入密碼。" name="psw-repeat" id="psw-repeat" required></center>
      <hr>
      <center>
        <p><input id="checkbox" type="checkbox" />我已閱讀並同意 <a href="#">用戶協議</a>及<a href="#">隱私政策</a>。</p>
      </center>


      <center><button id="btn" type="button" class="registerbtn">註冊</button></center>

      <div class="signin">
        <p>已有帳戶了嗎? <a href="#">登入</a>.</p>
      </div>
    </div>
  </form>
`

export { RegisterPage }
