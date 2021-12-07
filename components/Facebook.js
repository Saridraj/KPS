import Script from 'next/script'

function Facebook() {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Script

dangerouslySetInnerHTML={{
    __html: `
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
  `,
  }}
        
       
  
       
  
       
    
      />
        
     
    </div>
  );
}

export default Facebook;