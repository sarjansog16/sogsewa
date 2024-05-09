import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Facebook = () => {
    return (
      <FacebookProvider appId="461059762977734" chatSupport>
        <CustomChat pageId="107401024287642" minimized={false}/>
      </FacebookProvider>    
    );
  
}

export default Facebook;