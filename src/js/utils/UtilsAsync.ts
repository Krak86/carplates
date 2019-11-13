export default class UtilsAsync {
    /**     gets default device
     */
    public static getVideoDevices = async (): Promise<MediaDeviceInfo[]> => {
        const deviceInfos = await navigator.mediaDevices.enumerateDevices();
        return deviceInfos.filter((d: MediaDeviceInfo) => d.kind == "videoinput"); 
      }
    /**
      * Function to play sound
      * Sound source:
      *      "https://notificationsounds.com/notification-sounds/sharp-592"
      */  
    public static playNotification(): void{
      const audio_source = "audio/sharp.mp3";
      const audio = new Audio(audio_source);
      audio.play();
    }
}