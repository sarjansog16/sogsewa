import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const Facebook = () => {
    return(
        <FacebookProvider appId="2025869981129330" chatSupport>
        <CustomChat pageId="107401024287642" minimized={false}/>
      </FacebookProvider>    
    )

}

export default Facebook;
