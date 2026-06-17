import { Cloudinary } from '@cloudinary/url-gen'

export const getCloudImageUrl = (imgId: string) => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dryevsuoy' } });
    const myImage = cld.image(imgId);
    return myImage.toURL(); // returns the CDN URL
}
