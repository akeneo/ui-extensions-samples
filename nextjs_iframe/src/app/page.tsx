"use client"

import {Helper, TabBar, Badge} from 'akeneo-design-system'
import { useRouter } from 'next/navigation'
import Fitment from './fitment.tsx'
import React from 'react'

export default function Home() {
  const router = useRouter()

  const handlePostMessage = (event) => {
    if (event.origin !== "http://localhost:8080") return;
    console.log(event.data);
  };

  React.useEffect(() => {
    window.addEventListener('message', handlePostMessage, false);

    // cleanup this component
    return () => {
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);


  return (
    <>
    <Helper level="info">
      You&apos;re navigating in a UI extension.
    </Helper>
    <div>
      <TabBar moreButtonTitle="More">
        <TabBar.Tab
          isActive={true}
          onClick={() => router.push('/')}
        >
          First tab{' '}
          <Badge level="warning">
            2
          </Badge>
        </TabBar.Tab>
        <TabBar.Tab
          isActive={false}
          onClick={() => router.push('/3d')}
        >
          3d model
        </TabBar.Tab>
        <TabBar.Tab
          isActive={false}
          onClick={() => router.push('/login')}
        >
          Last tab{' '}
          <Badge level="danger">
            0
          </Badge>
        </TabBar.Tab>
      </TabBar>
    </div>
    <div>
    </div>
    <div>
      <Fitment />
    </div>
  </>
  );
}
