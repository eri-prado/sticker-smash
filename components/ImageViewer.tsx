import { StyleSheet, Image } from 'react-native';

interface ImageViewer {
  placeholderImageSource: any;
  selectedImage: string | null;
}

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: ImageViewer) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
