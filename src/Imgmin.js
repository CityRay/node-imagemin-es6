/*
* @Author: RayLin
* @Date:   2016-08-03 17:15:12
* @Last Modified by:   RayLin
* @Last Modified time: 2016-08-05 10:50:21
*/

import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminGifsicle  from 'imagemin-gifsicle';
import fileType from 'file-type';

class Imgmin {
    constructor(quality = 80) {
        this.quality = quality;
    }

    // Receive Buffer Data
    doImgmin(data) {
        if (data) {
            return imagemin.buffer(data, {
                plugins: [
                    imageminMozjpeg({quality: this.quality}),
                    imageminPngquant({quality: this.quality.toString()}),
                    imageminGifsicle({interlaced: true})
                ]
            });
        }

        return 'error data';
    }

    // Receive Buffer Data
    getFileType(data) {
        if (data) {
            return fileType(data).ext;
        }

        return 'error data';
    }
}

export default Imgmin;
