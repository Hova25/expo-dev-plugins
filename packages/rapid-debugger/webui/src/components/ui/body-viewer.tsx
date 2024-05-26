import { isArray, isBoolean, isNumber, isObject, isString } from 'lodash';
import { Fragment } from 'react';

type BodyViewerProps = {
  data: any;
};

const BodyViewerObjectItem = ({ data }: { data: object }) => {
  return (
    <>
      {'{ '}
      {Object.entries(data).map(([key, value], index) => (
        <div className="pl-2" key={`${key}`}>
          <span>"{key}": </span> <BodyViewerItem data={value} />,
        </div>
      ))}
      {' }'}
    </>
  );
};
const BodyViewerArrayItem = ({ data }: { data: any[] }) => {
  return (
    <>
      {'[ '}
      {Object.entries(data).map(([key, value], index) => (
        <div className="pl-2" key={`${key}-${value.toString()}`}>
          <BodyViewerItem data={value} />,
        </div>
      ))}
      {' ]'}
    </>
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
    <div>
      <BodyViewerItem data={data} />
    </div>
  );
}
