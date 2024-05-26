import { isArray, isBoolean, isNumber, isObject, isString } from 'lodash';
import { Fragment, MouseEvent, useState } from 'react';

import { cn } from '../../lib/utils';

type BodyViewerProps = {
  data: any;
};

// todo refacto object en array item

const BodyViewerObjectItem = ({ data }: { data: object | any[] }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  return (
    <span>
      <span
        className={cn(isCollapse && 'cursor-pointer', 'text-red-500')}
        onClick={() => setIsCollapse((oldValue) => !oldValue)}
      >
        {'< '}
      </span>
      {'{ '}
      {isCollapse ? (
        <span>...</span>
      ) : (
        <>
          {Object.entries(data).map(([key, value], index) => (
            <div className="pl-2" key={`${key}`}>
              <span>"{key}": </span> <BodyViewerItem data={value} />,
            </div>
          ))}
        </>
      )}
      {' }'}
    </span>
  );
};
const BodyViewerArrayItem = ({ data }: { data: any[] }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    setIsCollapse((oldValue) => !oldValue);
  };
  return (
    <span className={cn(isCollapse && 'cursor-pointer')}>
      <span
        className={cn(isCollapse && 'cursor-pointer', 'text-red-500')}
        onClick={handleClick}
      >
        {'< '}
      </span>
      {'[ '}
      {isCollapse ? (
        <span>...</span>
      ) : (
        <>
          {Object.entries(data).map(([key, value], index) => (
            <div className="pl-2" key={`${key}-${value.toString()}`}>
              <BodyViewerItem data={value} />,
            </div>
          ))}
        </>
      )}
      {' ]'}
    </span>
  );
};

const BodyViewerItem = ({ data }: BodyViewerProps) => {
  if (!isObject(data)) {
    return (
      <>
        {isString(data) && <span className="text-blue-400">{data}</span>}
        {isNumber(data) && <span className="text-green-400">{data}</span>}
        {isBoolean(data) && (
          <span className="text-violet-400">{data.toString()}</span>
        )}
      </>
    );
  }
  return (
    <>
      {isArray(data) ? (
        <BodyViewerArrayItem data={data} />
      ) : (
        <BodyViewerObjectItem data={data} />
      )}
    </>
  );
};

export default function BodyViewer({ data }: BodyViewerProps) {
  return (
    <span>
      <BodyViewerItem data={data} />
    </span>
  );
}
