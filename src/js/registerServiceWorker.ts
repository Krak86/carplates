export function register(){
    if('serviceWorker' in navigator){
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(reg => {
            reg.onupdatefound = () => {
              const installingWorker = reg.installing;
              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case 'installed':
                    if (navigator.serviceWorker.controller) {
                      // new update available
                      console.log("New content is available and will be used when all tabs for this page are closed.");
                      reg.update()
                      .then(() => {
                        //window.location.reload(true);
                      });
                    }
                    break;
                }
              };
            };
          //console.log('SW registered: ', reg);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
      });
    }
  }
 
export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister();
      });
    }
  }
  