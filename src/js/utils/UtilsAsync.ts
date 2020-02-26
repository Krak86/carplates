import Utils from "../utils/Utils";
import { Headers } from "../data/Data";
import { IServiceRespond, IVIN, IImageRecognizeResponse, IPlatesmania, IRiaCategories, IRiaSearch, IRiaAds, IUserItem, IItem } from "../models/Interfaces";

/**
 * Class to provide async utility functions
 */
export default class UtilsAsync {
    /**
     * gets default device
     */
    public static getVideoDevices = async (): Promise<MediaDeviceInfo[]> => {
        const deviceInfos = await navigator.mediaDevices.enumerateDevices();
        return deviceInfos.filter((d: MediaDeviceInfo) => d.kind === "videoinput");
    }
    /**
     * Function to get user media devices
     */
    public static getMediaDevices = async (constraints: any): Promise<MediaStream> => {
      try {
        return await navigator.mediaDevices.getUserMedia(constraints);
      } catch (err) {
        return err;
      }
    }
    /**
     * Function to stop the stream tracks
     */
    public static StreamTrackStop(stream: MediaStream): void {
      stream.getTracks().forEach((track: MediaStreamTrack) => {
        track.stop();
      });
    }
    /**
     * Function to play sound
     * Sound source:
     *      "https://notificationsounds.com/notification-sounds/sharp-592"
     */
    public static async playNotification(): Promise<void> {
      const audioSource = "audio/sharp.mp3";
      const audio = new Audio(audioSource);
      const playPromise = audio.play();
      await playPromise;
    }
    /**
     * Function to fetch data for plate by URL
     */
    public static fetchDataForPlateApi(url: string): Promise<IServiceRespond> {
      return new Promise<IServiceRespond>((resolve, reject) => {
        fetch(url, {
          headers: {
              Accept: Headers.Accept,
              contentType: Headers["Content-Type"],
          },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IServiceRespond) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to fetch data for VIN by URL
     */
    public static fetchDataForVinApi(url: string): Promise<IVIN> {
      return new Promise<IVIN>((resolve, reject) => {
        fetch(url, {
          headers: {
              Accept: Headers.Accept,
              contentType: Headers["Content-Type"],
          },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IVIN) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to get data by sending plate number by URL to service
     */
    public static imageFetchDataApi(file: File, url: string): Promise<IImageRecognizeResponse> {
      return new Promise<IImageRecognizeResponse>((resolve, reject) => {
        const formData = new FormData();
        formData.append("file", file);
        const options = {
            method: "POST",
            body: formData,
        };
        fetch(url, options)
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IImageRecognizeResponse) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to get plate by sending file by URL to service
     */
    public static fetchDataForPlatesmaniaApi(carPlate: string, url: string): Promise<IPlatesmania> {
      return new Promise<IPlatesmania>((resolve, reject) => {
        const options = {
          method: "POST",
          body: Utils.generateBodyForPlatesManiaProxy(carPlate),
          headers: {
              Accept: Headers.Accept,
          },
        };
        fetch(url, options)
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IPlatesmania) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to fetch data for RIA model by URL to service
     */
    public static fetchDataForRiaModelApi(url: string): Promise<IRiaCategories[]> {
      return new Promise<IRiaCategories[]>((resolve, reject) => {
        fetch(url, {
          headers: {
            Accept: Headers.Accept,
          },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IRiaCategories[]) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to fetch data for RIA search by URL to service
     */
    public static fetchDataForRiaSearchApi(url: string): Promise<IRiaSearch> {
      return new Promise<IRiaSearch>((resolve, reject) => {
        fetch(url, {
          headers: {
            Accept: Headers.Accept,
          },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IRiaSearch) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to fetch data for RIA Ads by URL to service
     */
    public static fetchDataForRiaAdsApi(url: string): Promise<IRiaAds> {
      return new Promise<IRiaAds>((resolve, reject) => {
        fetch(url, {
          headers: {
            Accept: Headers.Accept,
          },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IRiaAds) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to sync the user's data
     */
    public static userSyncApi(url: string): Promise<IUserItem> {
      return new Promise<IUserItem>((resolve, reject) => {
        fetch(url, {
          headers: {
            Accept: Headers.Accept,
          },
        })
        .then(Utils.isResponseOk)
        .then((response) => response.json())
        .then((itemResponse: IUserItem) => {
          resolve(itemResponse);
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
    /**
     * Function to update the user's data
     */
    public static updateUserApi(url: string, items: IItem[]): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const options: RequestInit = {
          headers: {
              contentType: Headers["Content-Type"],
          },
          method: "PUT",
          body: Utils.generateBodyForUpdateUser(items),
        };
        fetch(url, options)
        .then(Utils.isResponseOk)
        .then((response) => response)
        .then(() => {
            resolve();
        })
        .catch((error) => {
          reject(`${error}`);
        });
      });
    }
}
