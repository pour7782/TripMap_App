import { useState, useEffect } from 'react';
import { Image } from 'react-native';

// PopupSharedSchedule에 띄울 이미지 컴포넌트
const AutoSizedImage = ({ source, maxWidth, maxHeight }) => {
    const [size, setSize] = useState({ width: maxWidth, height: maxHeight })

    useEffect(() => {
        Image.getSize(source.uri, (width, height) => {
            const ratio = width / height
            let newWidth = maxWidth
            let newHeight = maxHeight

            if (maxWidth / maxHeight > ratio) {
                newWidth = maxHeight * ratio
            } else {
                newHeight = maxWidth / ratio
            }

            setSize({ width: newWidth, height: newHeight })
        })
    }, [source.uri, maxWidth, maxHeight])

    return (
        <Image
            source={source}
            style={{ width: size.width, height: size.height }}
            resizeMode="cover"
        />
    )
}

export default AutoSizedImage;