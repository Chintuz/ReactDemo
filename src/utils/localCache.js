import RNFetchBlob from "rn-fetch-blob";
import { CameraRoll, Platform } from "react-native";

const fileSystem = RNFetchBlob.fs;

export const downloadFile = (imgUrl) => {

    let newImgUri = imgUrl.lastIndexOf('/');
    let imageName = imgUrl.substring(newImgUri);

    let dirs = fileSystem.dirs;
    let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;

    // console.log("imgUrl -> ", imgUrl)
    console.log("path -> ", path)

    fileSystem.exists(path)
        .then(it => {
            if (it) return;
            RNFetchBlob.config({
                fileCache: true,
                appendExt: '*',
                indicator: true,
                IOSBackgroundTask: true,
                path: path,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: false,
                    path: path,
                    description: 'Image'
                },

            }).fetch("GET", imgUrl).then(res => {
                console.log('end downloaded')
            }).catch(err => {
                console.log('error downloaded -> ', err, imgUrl)
            });
        }).catch(err => {
            console.log('error checking image exists-> ', err, imgUrl)
        })

}

export const deleteImages = (imgUrl) => {

    let newImgUri = imgUrl.lastIndexOf('/');
    let imageName = imgUrl.substring(newImgUri);

    let dirs = fileSystem.dirs;
    let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;
    console.log("path -> ", path)

    fileSystem.exists(path)
        .then(it => {
            if (it) {
                fileSystem.unlink(path)
                    .then(it => {
                        console.log("image deleted..")
                    }).catch(err => {
                        console.log("image not deleted..111 ", err)
                    })
            }
        }).catch(err => {
            console.log("image not deleted..222 ", err)

        })

}
