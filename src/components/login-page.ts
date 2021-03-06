const LoginPage: string = `
  <style type="text/css">
  body {
    background-image: url('./img/egg.png');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }

  .login {
    background: rgba(40, 59, 27, 0.4);
    text-align: center;
    color: #fff;
    font-family: 微軟正黑體;
    font-weight: bolder;
    border-radius: 20px;
    padding: 30px;
    margin: 2rem;
    flex-basis: 450px;
  }

  .login i {
    font-size: 100px;
    margin: 20px auto;
  }

  input[type="text"],
  input[type="password"] {
    font-size: 16px;
    font-weight: bolder;
    font-family: 微軟正黑體;
    padding: 5px;
    border-radius: 10px;
    margin: 15px auto;
    display: block;
    width: 100%;
  }

  .btn-submit {
    font-weight: bolder;
    border-radius: 8px;
    margin: 8px auto;
    line-height: 30px;
    padding: 4px 10px;
    font-size: 20px;
    font-family: 微軟正黑體;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
  }

  @media screen and (max-width: 576px) {
    .login-form {
      margin-top: 0rem;
    }
  }
  </style>

  <div class="login-form">
  <form action="" class="login">
    <h1>登入</h1>
    <i class="fas fa-user-circle"></i>
    <h2>帳號</h2>
    <input class="form-control form-control-lg" type="text" placeholder="請輸入密碼" aria-label=".form-control-lg example">
    <h2>密碼</h2>
    <input class="form-control form-control-lg" type="password" placeholder="請輸入密碼" aria-label=".form-control-lg example">
    <button type="button" class="btn btn-secondary btn-submit">登入</button>
  </form>
  </div>
`

export { LoginPage }
