import React from 'react';
import PropTypes from 'prop-types';
import { LazyImage as ReactLazyImage } from 'react-lazy-images';

import { Image, Placeholder } from './style';

function LazyImage({ src }) {
  return (
    <ReactLazyImage
      src={src}
      placeholder={({ ref }) => <Placeholder ref={ref} />}
      actual={({ imageProps }) => <Image {...imageProps} />}
    />
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
};

export default LazyImage;
