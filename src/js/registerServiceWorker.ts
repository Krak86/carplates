import Utils from "./utils/Utils";

export const register = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
          .then((reg) => {
            reg.onupdatefound = () => {
              const installingWorker = reg.installing;
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
                    reg.update()
                    .then(() => {
                        // TODO: implement react-redux-toastr or something
                        /* tslint:disable no-console */
                        console.log("New content is available and will be used when all tabs for this page are closed.");
                    });
                  }
                };
              }
            };
          })
          .catch((error) => {
            Utils.catchError(error);
        });
    });
  }
};
export const unregister = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
};
