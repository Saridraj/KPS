import Document, { Head, Html, Main, NextScript,  } from 'next/document'
import Script from `next/script`
export default class MyDocument extends Document {


  
render() {
    return (
    <html>
    <Head >
    <meta name="viewport" content="width=device-width, initial-    scale=1" />
    <link rel='stylesheet'   href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.0/antd.min.css' />
    <link href="https://fonts.googleapis.com/css2?family=Kanit" 
        rel="stylesheet"/>
    </Head>
    <body>
       <Main />
       <NextScript />

 
    <div id="fb-root"></div>


    <div id="fb-customer-chat" className="fb-customerchat">
    </div>

    <Script>
      {
        `
        var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "107775365947740");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
        `
      }
      
    </Script>
    </body>
    </html>
  )
}}