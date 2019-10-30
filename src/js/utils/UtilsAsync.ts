export default class UtilsAsync {
    /**     gets default device
     */
    public static getVideoDevices = async (): Promise<MediaDeviceInfo[]> => {
        const deviceInfos = await navigator.mediaDevices.enumerateDevices();
        return deviceInfos.filter((d: MediaDeviceInfo) => d.kind == "videoinput"); 
      }

}