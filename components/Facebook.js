import Script from 'next/script'

function Facebook() {
  return (
    <div>
      <div id='fb-root'></div>

      <div id='fb-customer-chat' className="fb-customerchat"></div>
      <Script 
            src="https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js" strategy="lazyOnload">
            
            {`
             var chatbox = document.getElementById('fb-customer-chat');
             chatbox.setAttribute("page_id", "107775365947740");
             chatbox.setAttribute("attribution", "biz_inbox");
        `}
      </Script>


     
    </div>
  );
}

export default Facebook;