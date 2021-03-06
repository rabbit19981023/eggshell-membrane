const ContactPage: string = `
  <div class="contact">
    <h1 class="text-center fw-bold">聯絡我們</h1>

    <div class="contact-wrapper row">
      <div class="contact-left col-lg-5">
        <img src="./img/main.png">

        <hr class="w-50 mx-auto my-4 my-md-5">

        <div class="contact-intro">
          <p>若對產品有疑問，或需更進一步之相關資訊，歡迎填寫表單或是直接與我們聯絡！</p>
        </div>

        <hr class="w-50 mx-auto my-4 my-md-5">

        <div class="contact-info">
          <h3 class="fw-bold">聯絡資訊</h3>
          <p>地址：824 高雄市燕巢區大學路1號</p>
          <p>電話：07-6011000</p>
          <p>傳真：07-6011000</p>
          <p>信箱：C107107231@nkust.edu.tw</p>
        </div>
      </div>

      <div class="contact-right col-lg">
        <form class="contact-form" name="contact-us" netlify>
          <div class="row">
            <input type="text" name="company" placeholder="公司名稱" class="form-control w-auto">
            <input type="text" name="user" placeholder="*聯絡人名稱" class="form-control w-auto" required>
          </div>

          <div class="row">
            <input type="text" name="phone" placeholder="*聯絡電話" class="form-control w-auto" required>
            <input type="text" name="fax-phone" placeholder="傳真電話" class="form-control w-auto">
          </div>

          <div class="row">
            <input type="text" name="e-mail" placeholder="*電子信箱" class="form-control w-auto" required>
          </div>

          <div class="row">
            <input type="text" name="title" placeholder="*主旨" class="form-control w-auto" required>
          </div>

          <div class="row">
            <textarea rows="8" name="description" placeholder="*詢問訊息" class="form-control w-auto" required></textarea>
          </div>

          <center>
            <button type="submit" class="btn btn-primary">確認送出</button>
          </center>
        </form>
      </div>
    </div>
  </div>
`

export { ContactPage }
