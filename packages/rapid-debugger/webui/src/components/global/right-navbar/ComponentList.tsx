import React from 'react';

import { Typography } from '../../ui/typography';
import { useLayoutContext } from '../grid-layout/LayoutContext';

export default function ComponentList() {
  const { addComponent } = useLayoutContext();
  return (
    <>
      <Typography
        onClick={() => addComponent('console')}
        className="cursor-pointer"
      >
        Console
      </Typography>
      <Typography
        onClick={() => addComponent('network')}
        className="cursor-pointer"
      >
        Network
      </Typography>
      <Typography
        onClick={() => addComponent('reactQuery')}
        className="cursor-pointer"
      >
        ReactQuery
      </Typography>
    </>
  );
}
