import Link from "next/link";
import "./style.css"

export default function Landing_Page(){
  return(
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#efefff] main">
<div className="w-[1440px] bg-[#fcfcff] rounded-xl py-[30px]">
    {/* menu start */}
    <div className="flex justify-between mx-[50px] ">
      <div className="flex gap-2 items-center">
      <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <p className="font-bold">Design Daily</p>
      </div>
      <div className="flex gap-3 items-center ">
        <Link href="#" className="p-[10px] rounded-[12px] bg-[#F1F1FD] font-bold">Free designs</Link>
        <Link href="#">License</Link>
        <Link href="#">Articles</Link>
        <Link href="#">Contributors</Link>
        <Link href="#">About</Link>
      </div>
      <div className="flex gap-5 items-center">
      <Link href="#" className="font-bold">Log in</Link>
        <Link href="#" className="px-[25px] py-[15px] rounded-[12px] bg-[#202142] font-bold text-white">Sign Up</Link>
      </div>
    </div>
    {/* menu end */}
    {/* spacing start */}
    <div className="h-[2px] w-full bg-[#EFEFFF] my-[30px]">
    </div>
    {/* spacing end */}
    {/* content start */}
    <div className="mx-[50px] flex flex-col gap-5">
    <p className="text-[#FF6A95] font-bold ">Day 1384</p>
    <h2 className="font-bold text-center text-[24px]">Free UI resources for everyone</h2>
    <p className="text-center">The largest database of 100% free UI components and designs<br/>available in the formats popular by UI designers.</p>
    <div className="flex items-center justify-center">
      <form action="#" className="mb-[80px] mt-[20px] w-[651px] h-[74px] rounded-[10px] bg-white flex overflow-hidden shadow-lg">
    <label htmlFor="search-sub" className="hidden">Chọn gói</label>
    <select name="search-sub" id="search-sub" className="p-5 flex-3 outline-none">
                <option value="free designs">Free designs</option>
                <option value="b">Free designs</option>
              </select>
    <input type="text" placeholder="Search" className="outline-none p-5 flex-1"/>
    </form>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-4">
      <button className="py-[10px] px-[20px] rounded-[12px] bg-white shadow-lg font-bold">Latest</button>
      <button>Popular</button>
      </div>
      <div className="flex gap-4">
        <button  className="py-[10px] px-[20px] rounded-[52px] bg-white shadow-lg font-bold">All</button>
        <button>Web</button>
        <button>Mobile</button>
        <button>UI Kit</button>
        <button>Coded</button>
      </div>
      <div className="flex gap-4">
      <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      </div>
    </div>
    <div className="flex flex-wrap gap-4"></div>
    </div>
    {/* content end */}

    </div>
      {/* content */}
    </div>
  );
}