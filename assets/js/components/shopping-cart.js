class ShoppingCart {
  constructor () {

  }

  async getHtml () {
    return (`
      <div id="my-store-61531483"></div>
      <div>
      <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?61531483&data_platform=code&data_date=2021-06-07" charset="utf-8"></script>
      <script type="text/javascript">
        try {
          xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-61531483")
        } catch (err) {
          const ecwid = document.querySelector('[src^="https://app.ecwid.com/script.js"]')
          ecwid.onload = () => { xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-61531483") }
        }
      </script>
      </div>
    `)
  }
}

export default ShoppingCart

/*
<script>
        if (buildShoppingStore) {
          const ecwid = document.querySelector('#ecwid-main-js')
          const browser = document.querySelector('#ecwid-browser-js')
          ecwid.remove()
          browser.remove()
          
          buildShoppingStore()
        }

        const buildShoppingStore = function () {
          const ecwid = document.createElement('script')
          ecwid.id = 'ecwid-main-js'
          ecwid["data-cfasync"] = false
          ecwid.type = 'text/javascript'
          ecwid.src = 'https://app.ecwid.com/script.js?61531483&data_platform=code&data_date=2021-05-31'
          ecwid.charset = 'utf-8'
  
          const productBrowser = function () {
            const browser = document.createElement('script')
            browser.id = 'ecwid-browser-js'
            browser.type = 'text/javascript'
            browser.innerText = xProductBrowser("categoriesPerRow=3", "views=grid(20,3) list(60) table(60)", "categoryView=grid", "searchView=list", "id=my-store-61531483");
            document.body.appendChild(browser)
          }
  
          document.body.appendChild(ecwid)
          ecwid.addEventListener('load', productBrowser)
        }
      </script>
*/