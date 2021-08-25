const Navbar: string = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="./img/main.png" class="main-brand"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link fs-5" href="/brand">品牌理念</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5 store-link" href="/store">線上選購</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="/contact">聯絡我們</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto me-4">
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">登入</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">註冊</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`
export { Navbar }
