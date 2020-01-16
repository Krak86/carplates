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
                        window.postMessage(true, "*" || "");
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
