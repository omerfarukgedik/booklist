import defaultImage from '~/assets/img/Image_not_available.png';

export function replaceImageByDefault(e) {
  e.target.src = defaultImage;
}
