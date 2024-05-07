import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Facebook = () => {
    return (
      <FacebookProvider appId="1343240006351367" chatSupport>
        <CustomChat pageId="107401024287642" minimized={true}/>
      </FacebookProvider>    
    );
  
}
export default Facebook;