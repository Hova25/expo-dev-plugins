import tw from '../utils/tailwind';
import { PropsWithChildren } from 'react';
import DevToolNotConnected from './info/DevToolNotConnected';

export default function Layout({children}: PropsWithChildren) {
  return (
    <div style={tw`w-full h-full`}>
      <DevToolNotConnected />
      {children}
    </div>
  )
}