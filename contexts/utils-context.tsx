import React, { FC, useState, useRef } from "react";

export interface IHelperMethods {
  NewCmix: Function;
  LoadCmix: Function;
  GetDefaultCMixParams: Function;
  GenerateChannel: Function;
  GetChannelInfo: Function;
  Base64ToUint8Array: Function;
  GenerateChannelIdentity: Function;
  NewChannelsManagerWithIndexedDb: Function;
  LoadChannelsManagerWithIndexedDb: Function;
  GetPublicChannelIdentityFromPrivate: Function;
  IsNicknameValid: Function;
  GetShareURLType: Function;
  GetGitVersion: Function;
  GetOrInitPassword: Function;
  ImportPrivateIdentity: Function;
}

const initialUtils = {
  NewCmix: () => {},
  LoadCmix: () => {},
  GetDefaultCMixParams: () => {},
  GenerateChannel: () => {},
  GetChannelInfo: () => {},
  Base64ToUint8Array: () => {},
  GenerateChannelIdentity: () => {},
  NewChannelsManagerWithIndexedDb: () => {},
  LoadChannelsManagerWithIndexedDb: () => {},
  GetPublicChannelIdentityFromPrivate: () => {},
  IsNicknameValid: () => {},
  GetShareUrlType: () => {},
  GetVersion: () => {},
  GetOrInitPassword: () => {},
  ImportPrivateIdentity: () => {}
};

export const UtilsContext = React.createContext<{
  utils: IHelperMethods;
  setUtils: Function;
  utilsLoaded: boolean;
  setUtilsLoaded: Function;
}>({
  utils: initialUtils,
  setUtils: () => {},
  utilsLoaded: false,
  setUtilsLoaded: () => {}
});

UtilsContext.displayName = "UtilsContext";

export const UtilsProvider: FC<any> = props => {
  const [utils, setUtils] = useState<IHelperMethods>(initialUtils);
  const [utilsLoaded, setUtilsLoaded] = useState<boolean>(false);
  const transferIdentittyVariables = useRef<any>({});

  return (
    <UtilsContext.Provider
      value={{
        utils,
        setUtils,
        utilsLoaded,
        setUtilsLoaded,
        transferIdentittyVariables
      }}
      {...props}
    />
  );
};

export const useUtils = () => {
  const context = React.useContext(UtilsContext);
  if (context === undefined) {
    throw new Error(`useUtils must be used within a UtilsProvider`);
  }
  return context;
};

export const ManagedUtilsContext: FC<any> = ({ children }) => (
  <UtilsProvider>{children}</UtilsProvider>
);
