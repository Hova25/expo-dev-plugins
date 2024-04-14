import tw from '../../utils/tailwind';
import { PropsWithChildren } from 'react';
import Providers from './Providers';

export default function Layout({children}: PropsWithChildren) {
  return (
    <Providers>
      <div style={tw`w-full h-full`}>
        {children}
      </div>
    </Providers>
  )
}