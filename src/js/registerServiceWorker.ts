export function register() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
          .then((reg) => {
            reg.onupdatefound = () => {
              const installingWorker = reg.installing;
              if (installingWorker === null) {
                return;
              }
              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case "installed":
                    if (navigator.serviceWorker.controller) {
                      reg.update()
                      .then(() => {
                        // TODO: implement react-redux-toastr or something
                        /* tslint:disable no-console */
                        console.log("New content is available and will be used when all tabs for this page are closed.");
                      });
                    }
                    break;
                }
              };
            };
          })
          .catch((registrationError) => {
            // TODO: implement system of logs (implicit or explicit) according to 12 factors
            /* tslint:disable no-console */
            console.log("SW registration failed: ", registrationError);
        });
    });
  }
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
