import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const AutoSizedImage = ({ source, maxWidth, maxHeight }) => {
  const [size, setSize] = useState({ width: maxWidth, height: maxHeight });

  useEffect(() => {
    const isRemote = typeof source === 'object' && source?.uri;

    const updateSize = (width, height) => {
      const ratio = width / height;
      let newWidth = maxWidth;
      let newHeight = maxHeight;

      if (maxWidth / maxHeight > ratio) {
        newWidth = maxHeight * ratio;
      } else {
        newHeight = maxWidth / ratio;
      }

      setSize({ width: newWidth, height: newHeight });
    };

    if (isRemote) {
      Image.getSize(
        source.uri,
        (width, height) => updateSize(width, height),
        (error) => {
          console.warn('Image.getSize error:', error);
          setSize({ width: maxWidth, height: maxHeight });
        }
      );
    } else {
      const asset = resolveAssetSource(source);
      if (asset?.width && asset?.height) {
        updateSize(asset.width, asset.height);
      } else {
        setSize({ width: maxWidth, height: maxHeight });
      }
    }
  }, [source, maxWidth, maxHeight]);

  return (
    <Image
      source={source}
      style={{ width: size.width, height: size.height }}
      resizeMode="cover"
    />
  );
};

export default AutoSizedImage;
