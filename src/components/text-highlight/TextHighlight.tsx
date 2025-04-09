import { Fragment, type FC } from 'react';

interface Props {
  highlight: string;
  children: string;
}

export const TextHighlight: FC<Props> = ({ highlight, children }) => {
  if (!highlight) return children;

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = children.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
};
