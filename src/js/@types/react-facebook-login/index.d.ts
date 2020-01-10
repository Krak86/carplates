import * as React from "react";
export interface IReactFacebookLoginProps {
    appId: string;
    callback(userInfo: IReactFacebookLoginInfo): void;
    onFailure?(response: IReactFacebookFailureResponse): void;

    autoLoad?: boolean;
    buttonStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    cookie?: boolean;
    cssClass?: string;
    disableMobileRedirect?: boolean;
    fields?: string;
    icon?: React.ReactNode;
    isDisabled?: boolean;
    language?: string;
    onClick?(event: React.MouseEvent<HTMLDivElement>): void;
    reAuthenticate?: boolean;
    redirectUri?: string;
    scope?: string;
    size?: "small" | "medium" | "metro";
    textButton?: string;
    typeButton?: string;
    version?: string;
    xfbml?: boolean;
    isMobile?: boolean;
    tag?: Node | React.Component<any>;
    returnScopes?: boolean;
    state?: string;
    authType?: string;
    responseType?: string;
}
export interface IReactFacebookFailureResponse {
    status?: string;
}
export interface IReactFacebookLoginInfo {
    accessToken?: string;
    data_access_expiration_time?: string;
    email?: string;
    expiresIn?: string;
    id?: string;
    name?: string;
    picture: {
        data: {
          height?: number,
          is_silhouette?: boolean,
          url?: string,
          width?: number,
      },
    };
    signedRequest?: string;
    userID?: string;
}
export interface IReactFacebookLoginState {
    isSdkLoaded?: boolean;
    isProcessing?: boolean;
}
export default class ReactFacebookLogin extends React.Component<
IReactFacebookLoginProps,
IReactFacebookLoginState
> {}
