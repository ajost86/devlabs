let isWebPSupported;

function canUseWebP() {
  let elem = document.createElement('canvas');

  if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}

export default function replaceImageFormat(path) {
  if (typeof isWebPSupported !== 'boolean') {
    isWebPSupported = canUseWebP();
  }

  if (isWebPSupported) {
    path = path.replace(/\.jpg$|\.jpeg$|\.png$/, '.webp');
  }

  // console.log('path', path, isWebPSupported);

  return path;
}
