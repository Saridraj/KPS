import Script from 'next/script'

function Facebook() {
  return (
    <div>
      <div id='fb-root'></div>

      <div id='fb-customer-chat' className="fb-customerchat"></div>
      <Script 
            src="https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js" strategy="lazyOnload"    
      />


     
    </div>
  );
}

export default Facebook;