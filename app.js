/*
* @Author: RayLin
* @Date:   2016-08-03 17:15:12
* @Last Modified by:   RayLin
* @Last Modified time: 2016-08-05 10:39:53
*/
import fs from 'fs';
import Imgmin from './src/Imgmin.js';

const argv = process.argv.slice(2);
const quality = +(argv[0]);
const ipath = argv[1];
const splitArray = ipath.split(/[\/,\\,\.]/);
const filename = splitArray[splitArray.length - 2];

fs.readFile(ipath, function(err, data) {
    if (err) throw err; // Fail if the file can't be read.

    const imgmin = new Imgmin(quality);
    const imgtype = imgmin.getFileType(data);

    console.log(`Your image quality is      : ${quality}`);
    console.log(`Your image type is         : ${imgtype}`);
    console.log(`Your image new fileanme is : new_${filename}.${imgtype} \n`);

    // Base64
    // const _base64 = new Buffer(data).toString('base64');
    // console.log(_base64);

    imgmin.doImgmin(data).then((res) => {
        // console.log(res);
        if(res){
             fs.writeFileSync(`new_${filename}.${imgtype}`, res);
        }
    }).catch((err) => {
        console.log(err);
    });

});
