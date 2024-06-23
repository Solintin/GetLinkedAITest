declare module 'react-internet-meter' {
    import * as React from 'react';
  
    interface ReactInternetSpeedMeterProps {
      txtSubHeading?: string;
      txtMainHeading?:string;
      outputType?: string;
      customClassName?: string;
      pingInterval?: number;
      thresholdUnit?: string;
      threshold?: number;
      imageUrl?: string;
      downloadSize?: string;
      callbackFunctionOnNetworkDown?: (speed: number) => void;
      callbackFunctionOnNetworkTest?: (speed: number) => void;
    }
  
    const ReactInternetSpeedMeter: React.FC<ReactInternetSpeedMeterProps>;
  
    export { ReactInternetSpeedMeter};
  }
  