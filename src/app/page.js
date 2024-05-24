/**
 * @author yu shun chen <oooo12345545@gmail.com>
 */
import Link from "next/link";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle, 
  Footer,
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
 } from "flowbite-react";

export default function Home() {

  const items = [
    {
      cover:"https://www.welcometw.com/wp-content/uploads/2020/09/118691579_1657057164463110_6104639031164217332_n-570x428.jpg",
      name:"成龍溼地",
      despcription:"位於雲嘉南濱海國家風景區的成龍濕地，這個雲林景點原本是當地居民賴以為生的農耕地，因為地層下陷而形成的一處濕地生態，現在不僅是能夠賞夕陽的好地方，更是濕地植物與水鳥的家園。水面上宛如時光隧道的大竹環藝術品，與濕地構成一幅美麗的海岸景色，到現場感受藝術與生態融合之美。"
    },{
      cover:"https://www.welcometw.com/wp-content/uploads/2020/09/120176363_203303791142195_5303107489802969417_n-570x464.jpg",
      name:"三條崙海水浴場",
      despcription:"這裡有著用蚵仔殼、貝殼和漂流木等搭建而成的盪鞦韆，重新將海洋廢棄物注入新生命，駐足的旅人可以輕輕擺盪著鞦韆，望向無垠大海，讓煩惱隨之飄去。其中一個鞦韆位於崙北村燈塔附近，路面隨著潮汐可能較為濕滑，行走時需注意腳步；另一個鞦韆位於三條崙海水浴場當中，來這邊享受夕陽餘暉、擁抱寧靜的大海吧！"
    },{
      cover:"https://www.welcometw.com/wp-content/uploads/2020/09/87768074_143738987110140_2367535954598039363_n-570x428.jpg",
      name:"馬鳴山鎮安宮五年千歲祖廟",
      despcription:"早期鎮安宮前方天然沙坵及池塘，非常雜亂，經過美化及改建，現在更成為全台最大、最有特色的寺廟主題公園，這個雲林景點公園內的路線彷彿像是一座大迷宮，沿途會行經奇山怪石造景、高聳天空的彩虹橋，還有侏儸紀世界的暴龍，多達70多種特殊打卡景點。"
    }
  ];


  return (
    <>
      <div className="bg-[#03857d]">    
        <div className="container mx-auto">
          <Navbar fluid className="bg-[#03857d]">
            <NavbarBrand as={Link} href="https://flowbite-react.com">
              <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b">交通</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b">景點</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b">about me</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">Pricing</NavbarLink>
              <NavbarLink href="#" className="text-white">Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle/>
          </Navbar>
        </div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/images/banner/banner-1.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
          <img src="/images/banner/banner-2.jpg" alt="https://www.janfusun.com.tw/fancyworld.php" />
          <img src="/images/banner/banner-3.jpg" alt="由 abc759kimo - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=94599070" />
          <img src="/images/banner/banner-4.jpg" alt="https://guide.easytravel.com.tw/city/16" />
          <img src="/images/banner/banner-5.jpg" alt="由 Cpc3711 - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=82700144" />
        </Carousel>
      </div>

      <div className="bg-[#03857d] py-16">    
        <div className="container mx-auto grid grid-cols-4 gap-4">
          { items.map( item =>
          <Card
            className="max-w-sm"
            imgAlt={item.name}
            imgSrc={item.cover}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.despcription}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          )}
        </div>
      </div>


      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
      </Footer>
    </>
  );
}
