/**
 * @author yu shun chen <oooo12345545@gmail.com>
 */
import Image from "next/image"

export default function CustomCard({item}){
    return (
        <div className="border">
            <Image src={item.Picture.PictureUrl1} Alt={item.Picture.PictureDescription1}/>
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}