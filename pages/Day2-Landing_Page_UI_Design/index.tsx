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
    <div className="flex flex-wrap gap-4 my-[50px]">
      {/* card items */}
      <div className="w-[425px] h-[339px] flex flex-col gap-4 relative">
      <img className="w-[61px] h-[61px] rounded-[100%] absolute border-white border-[2px] top-5 left-5" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[425px] h-[319px] rounded-[10px]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
        <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
        <p>by <strong>Jenny Molla</strong> </p>
        </div>

        <div className="flex gap-4">
        <div className="flex gap-2 justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_342)">
<path d="M7.58333 8.66669L3.25 13L7.58333 17.3334" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4167 8.66669L22.75 13L18.4167 17.3334" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1667 4.33331L10.8333 21.6666" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_342">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>

        <p>25</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_347)">
<g clip-path="url(#clip1_1_347)">
<path d="M22.7094 16.6794L21.158 15.9078C20.5399 15.5927 20.2179 14.9746 20.2179 14.2718V11.1817C20.2179 10.5273 20.0604 9.87299 19.7694 9.27922L16.353 3.19722C15.9852 2.39785 14.9901 2.11636 14.258 2.60456C13.6885 2.98404 13.4675 3.71335 13.7299 4.34514L17.0793 10.9272C17.0913 10.9272 17.0793 10.9393 17.0913 10.9393C17.1519 11.1331 17.1883 11.327 17.1883 11.5331V15.1686C17.1883 15.5078 16.856 15.7745 16.5166 15.7745C16.1773 15.7745 15.9765 15.5078 15.9765 15.1686V12.7449C15.9765 12.0756 15.434 11.5331 14.7647 11.5331C14.0953 11.5331 13.5528 12.0756 13.5528 12.7449V17.0174C13.5528 18.3499 14.2162 19.5756 15.387 20.2118L20.4915 22.9848C20.5762 23.0211 20.6611 23.0454 20.758 23.0454C20.7971 23.0454 20.8362 23.0415 20.8746 23.0339C21.0874 22.9916 21.261 22.8368 21.3278 22.6304L23.016 17.4082C23.1083 17.123 22.9778 16.8129 22.7094 16.6794Z" fill="#202142"/>
<path d="M10.6446 11.5339C9.97529 11.5339 9.43281 12.0764 9.43281 12.7457V15.1694C9.43281 15.5086 9.23195 15.7753 8.8927 15.7753C8.55329 15.7753 8.22099 15.5086 8.22099 15.1694V11.5339C8.22099 11.3278 8.25744 11.1341 8.31803 10.9401C8.33002 10.9401 8.31803 10.928 8.33002 10.928L11.6794 4.34595C11.9418 3.71416 11.7206 2.98485 11.1513 2.60537C10.4192 2.11733 9.42413 2.39882 9.05633 3.19803L5.63986 9.27988C5.3489 9.87364 5.19142 10.5282 5.19142 11.1825V14.2727C5.19142 14.9755 4.86938 15.5935 4.25131 15.9086L2.69992 16.6802C2.43152 16.8137 2.30103 17.1236 2.39334 17.409L4.08137 22.6311C4.14812 22.8375 4.32185 22.9924 4.53455 23.0347C4.57305 23.0423 4.61218 23.0462 4.65131 23.0462C4.74819 23.0462 4.83308 23.0219 4.91782 22.9857L10.0222 20.2125C11.1931 19.5764 11.8565 18.3507 11.8565 17.0182V12.7457C11.8565 12.0764 11.314 11.5339 10.6446 11.5339Z" fill="#202142"/>
</g>
</g>
<defs>
<clipPath id="clip0_1_347">
<rect width="26" height="26" fill="white"/>
</clipPath>
<clipPath id="clip1_1_347">
<rect width="20.6818" height="20.6818" fill="white" transform="translate(2.36364 2.36365)"/>
</clipPath>
</defs>
</svg>


        <p>25</p>
        </div>
        </div>
      </div>
      </div>
      {/* card items */}
      {/* card items */}
      <div className="w-[425px] h-[339px] flex flex-col gap-4 relative">
      <img className="w-[61px] h-[61px] rounded-[100%] absolute border-white border-[2px] top-5 left-5" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[425px] h-[319px] rounded-[10px]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
        <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
        <p>by <strong>Jenny Molla</strong> </p>
        </div>

        <div className="flex gap-4">
        <div className="flex gap-2 justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_342)">
<path d="M7.58333 8.66669L3.25 13L7.58333 17.3334" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4167 8.66669L22.75 13L18.4167 17.3334" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1667 4.33331L10.8333 21.6666" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_342">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>

        <p>25</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_347)">
<g clip-path="url(#clip1_1_347)">
<path d="M22.7094 16.6794L21.158 15.9078C20.5399 15.5927 20.2179 14.9746 20.2179 14.2718V11.1817C20.2179 10.5273 20.0604 9.87299 19.7694 9.27922L16.353 3.19722C15.9852 2.39785 14.9901 2.11636 14.258 2.60456C13.6885 2.98404 13.4675 3.71335 13.7299 4.34514L17.0793 10.9272C17.0913 10.9272 17.0793 10.9393 17.0913 10.9393C17.1519 11.1331 17.1883 11.327 17.1883 11.5331V15.1686C17.1883 15.5078 16.856 15.7745 16.5166 15.7745C16.1773 15.7745 15.9765 15.5078 15.9765 15.1686V12.7449C15.9765 12.0756 15.434 11.5331 14.7647 11.5331C14.0953 11.5331 13.5528 12.0756 13.5528 12.7449V17.0174C13.5528 18.3499 14.2162 19.5756 15.387 20.2118L20.4915 22.9848C20.5762 23.0211 20.6611 23.0454 20.758 23.0454C20.7971 23.0454 20.8362 23.0415 20.8746 23.0339C21.0874 22.9916 21.261 22.8368 21.3278 22.6304L23.016 17.4082C23.1083 17.123 22.9778 16.8129 22.7094 16.6794Z" fill="#202142"/>
<path d="M10.6446 11.5339C9.97529 11.5339 9.43281 12.0764 9.43281 12.7457V15.1694C9.43281 15.5086 9.23195 15.7753 8.8927 15.7753C8.55329 15.7753 8.22099 15.5086 8.22099 15.1694V11.5339C8.22099 11.3278 8.25744 11.1341 8.31803 10.9401C8.33002 10.9401 8.31803 10.928 8.33002 10.928L11.6794 4.34595C11.9418 3.71416 11.7206 2.98485 11.1513 2.60537C10.4192 2.11733 9.42413 2.39882 9.05633 3.19803L5.63986 9.27988C5.3489 9.87364 5.19142 10.5282 5.19142 11.1825V14.2727C5.19142 14.9755 4.86938 15.5935 4.25131 15.9086L2.69992 16.6802C2.43152 16.8137 2.30103 17.1236 2.39334 17.409L4.08137 22.6311C4.14812 22.8375 4.32185 22.9924 4.53455 23.0347C4.57305 23.0423 4.61218 23.0462 4.65131 23.0462C4.74819 23.0462 4.83308 23.0219 4.91782 22.9857L10.0222 20.2125C11.1931 19.5764 11.8565 18.3507 11.8565 17.0182V12.7457C11.8565 12.0764 11.314 11.5339 10.6446 11.5339Z" fill="#202142"/>
</g>
</g>
<defs>
<clipPath id="clip0_1_347">
<rect width="26" height="26" fill="white"/>
</clipPath>
<clipPath id="clip1_1_347">
<rect width="20.6818" height="20.6818" fill="white" transform="translate(2.36364 2.36365)"/>
</clipPath>
</defs>
</svg>


        <p>25</p>
        </div>
        </div>
      </div>
      </div>
      {/* card items */}
      {/* card items */}
      <div className="w-[425px] h-[339px] flex flex-col gap-4 relative">
      <img className="w-[61px] h-[61px] rounded-[100%] absolute border-white border-[2px] top-5 left-5" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <img className="w-[425px] h-[319px] rounded-[10px]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
        <img className="w-[39px] h-[39px] rounded-[100%]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
        <p>by <strong>Jenny Molla</strong> </p>
        </div>

        <div className="flex gap-4">
        <div className="flex gap-2 justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_342)">
<path d="M7.58333 8.66669L3.25 13L7.58333 17.3334" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4167 8.66669L22.75 13L18.4167 17.3334" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1667 4.33331L10.8333 21.6666" stroke="#202142" stroke-width="2.36364" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_342">
<rect width="26" height="26" fill="white"/>
</clipPath>
</defs>
</svg>

        <p>25</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_347)">
<g clip-path="url(#clip1_1_347)">
<path d="M22.7094 16.6794L21.158 15.9078C20.5399 15.5927 20.2179 14.9746 20.2179 14.2718V11.1817C20.2179 10.5273 20.0604 9.87299 19.7694 9.27922L16.353 3.19722C15.9852 2.39785 14.9901 2.11636 14.258 2.60456C13.6885 2.98404 13.4675 3.71335 13.7299 4.34514L17.0793 10.9272C17.0913 10.9272 17.0793 10.9393 17.0913 10.9393C17.1519 11.1331 17.1883 11.327 17.1883 11.5331V15.1686C17.1883 15.5078 16.856 15.7745 16.5166 15.7745C16.1773 15.7745 15.9765 15.5078 15.9765 15.1686V12.7449C15.9765 12.0756 15.434 11.5331 14.7647 11.5331C14.0953 11.5331 13.5528 12.0756 13.5528 12.7449V17.0174C13.5528 18.3499 14.2162 19.5756 15.387 20.2118L20.4915 22.9848C20.5762 23.0211 20.6611 23.0454 20.758 23.0454C20.7971 23.0454 20.8362 23.0415 20.8746 23.0339C21.0874 22.9916 21.261 22.8368 21.3278 22.6304L23.016 17.4082C23.1083 17.123 22.9778 16.8129 22.7094 16.6794Z" fill="#202142"/>
<path d="M10.6446 11.5339C9.97529 11.5339 9.43281 12.0764 9.43281 12.7457V15.1694C9.43281 15.5086 9.23195 15.7753 8.8927 15.7753C8.55329 15.7753 8.22099 15.5086 8.22099 15.1694V11.5339C8.22099 11.3278 8.25744 11.1341 8.31803 10.9401C8.33002 10.9401 8.31803 10.928 8.33002 10.928L11.6794 4.34595C11.9418 3.71416 11.7206 2.98485 11.1513 2.60537C10.4192 2.11733 9.42413 2.39882 9.05633 3.19803L5.63986 9.27988C5.3489 9.87364 5.19142 10.5282 5.19142 11.1825V14.2727C5.19142 14.9755 4.86938 15.5935 4.25131 15.9086L2.69992 16.6802C2.43152 16.8137 2.30103 17.1236 2.39334 17.409L4.08137 22.6311C4.14812 22.8375 4.32185 22.9924 4.53455 23.0347C4.57305 23.0423 4.61218 23.0462 4.65131 23.0462C4.74819 23.0462 4.83308 23.0219 4.91782 22.9857L10.0222 20.2125C11.1931 19.5764 11.8565 18.3507 11.8565 17.0182V12.7457C11.8565 12.0764 11.314 11.5339 10.6446 11.5339Z" fill="#202142"/>
</g>
</g>
<defs>
<clipPath id="clip0_1_347">
<rect width="26" height="26" fill="white"/>
</clipPath>
<clipPath id="clip1_1_347">
<rect width="20.6818" height="20.6818" fill="white" transform="translate(2.36364 2.36365)"/>
</clipPath>
</defs>
</svg>


        <p>25</p>
        </div>
        </div>
      </div>
      </div>
      {/* card items */}
    </div>
    </div>
    {/* content end */}

    </div>
      {/* content */}
    </div>
  );
}