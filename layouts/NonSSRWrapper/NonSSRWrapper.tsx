import dynamic from 'next/dynamic';
import React, { FunctionComponent, useEffect, useState } from 'react';

type Props = {
  children: any
}

const NonSSRWrapper: FunctionComponent<Props> = (props) => ( 
  <React.Fragment>{props.children}</React.Fragment> 
);

export default dynamic(() => Promise.resolve(NonSSRWrapper), { 
  ssr: false 
});