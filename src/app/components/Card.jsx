/**
 * @author yu shun chen <oooo12345545@gmail.com>
 */
import Image from "next/image"
import AutoSizeImage from "@/app/components/AutoSizeImage";


export default function CustomCard({item}){
    return (
        <div className="border">
            <AutoSizeImage src={item.Picture.PictureUrl1} Alt={item.Picture.PictureDescription1}/>
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}