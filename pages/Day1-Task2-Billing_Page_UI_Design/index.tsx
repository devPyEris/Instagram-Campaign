import Image from 'next/image'
import Link from 'next/link'
import "./style.css"

export default function Billing_Page_UI_Design(){
  return(
    <div className="bg-[#E8E8FD] h-[100vh] flex items-center justify-center">
      <div className="bg-[#EE4D38] w-[276px] h-[1009px] rounded-[46px] absolute left-[18%]"></div>
      <div className="w-[1319px] h-[879px] rounded-[30px] bg-white flex overflow-hidden relative">
        <div className="flex w-[260px] bg-[#F8F8FF] flex-col px-[25px] py-[35px] items-start gap-6">
          <div className="h-[68px] flex gap-4">
          <img className="w-[55px] h-[55px] rounded-[17px]" src='https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/428057814_1108237603819034_4001724598442329491_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH0C8MUlyqtLeQeWgDla5jhMfKBDlU9TH0x8oEOVT1MfZ7QqD5iJbvnoZkjSGL8LatjuRacffc0eIEmfNRIg7fd&_nc_ohc=LL5pDU1yKnUAX_BWUTQ&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDAjltb4XQXmL2tfPhEjHBLATyNX_EQghEAUcfanIYAoQ&oe=65D3D758'></img>
            <div className="">
              <p className='font-bold'>Ildiko Gaspar</p>
              <p>@igaspar</p>
            </div>
          </div>

          <ul className="flex flex-col gap-6 items-start flex-4">
            <li className="flex gap-2 items-center justify-center cursor-pointer  hover:font-bold border-l-[4px] pl-2 border-transparent hover:border-[#EE4D38]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_125)">
<path d="M10.6667 10.6667H21.3333V21.3333H10.6667V10.6667Z" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 5.33333H7.99999C6.52724 5.33333 5.33333 6.52724 5.33333 8V24C5.33333 25.4728 6.52724 26.6667 7.99999 26.6667H24C25.4728 26.6667 26.6667 25.4728 26.6667 24V8C26.6667 6.52724 25.4728 5.33333 24 5.33333Z" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_125">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<p>General</p>
            </li>
            <li className="flex gap-2 items-center justify-center cursor-pointer  hover:font-bold border-l-[4px] pl-2 border-transparent hover:border-[#EE4D38]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_109)">
<path d="M22.6667 14.6667H9.33334C7.86058 14.6667 6.66667 15.8606 6.66667 17.3333V25.3333C6.66667 26.8061 7.86058 28 9.33334 28H22.6667C24.1394 28 25.3333 26.8061 25.3333 25.3333V17.3333C25.3333 15.8606 24.1394 14.6667 22.6667 14.6667Z" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22.6667C16.7364 22.6667 17.3333 22.0697 17.3333 21.3333C17.3333 20.597 16.7364 20 16 20C15.2636 20 14.6667 20.597 14.6667 21.3333C14.6667 22.0697 15.2636 22.6667 16 22.6667Z" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 14.6667V9.33333C10.6667 7.91885 11.2286 6.56229 12.2288 5.5621C13.229 4.5619 14.5855 4 16 4C17.4145 4 18.771 4.5619 19.7712 5.5621C20.7714 6.56229 21.3333 7.91885 21.3333 9.33333V14.6667" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_109">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<p>Password</p>
            </li>
            <li className="flex gap-2 items-center justify-center cursor-pointer  hover:font-bold border-l-[4px] pl-2 border-transparent hover:border-[#EE4D38]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_105)">
<path d="M25.3333 6.66666H6.66667C5.19391 6.66666 4 7.86057 4 9.33333V22.6667C4 24.1394 5.19391 25.3333 6.66667 25.3333H25.3333C26.8061 25.3333 28 24.1394 28 22.6667V9.33333C28 7.86057 26.8061 6.66666 25.3333 6.66666Z" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 9.33334L16 17.3333L28 9.33334" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_105">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<p>Invitations</p>
            </li>
            <li className="flex gap-2 items-center justify-center cursor-pointer font-bold border-l-[4px] pl-2 border-[#EE4D38]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_120)">
<path d="M25.3333 12H12C10.5272 12 9.33333 13.1939 9.33333 14.6667V22.6667C9.33333 24.1394 10.5272 25.3333 12 25.3333H25.3333C26.8061 25.3333 28 24.1394 28 22.6667V14.6667C28 13.1939 26.8061 12 25.3333 12Z" stroke="#1A194D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 21.3333C20.1394 21.3333 21.3333 20.1394 21.3333 18.6667C21.3333 17.1939 20.1394 16 18.6667 16C17.1939 16 16 17.1939 16 18.6667C16 20.1394 17.1939 21.3333 18.6667 21.3333Z" stroke="#1A194D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.6667 12V9.33334C22.6667 8.62609 22.3857 7.94782 21.8856 7.44772C21.3855 6.94762 20.7072 6.66667 20 6.66667H6.66667C5.95942 6.66667 5.28115 6.94762 4.78105 7.44772C4.28095 7.94782 4 8.62609 4 9.33334V17.3333C4 18.0406 4.28095 18.7189 4.78105 19.219C5.28115 19.7191 5.95942 20 6.66667 20H9.33333" stroke="#1A194D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_120">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<p>Billing</p>
            </li>
            <li className="flex gap-2 items-center justify-center cursor-pointer  hover:font-bold border-l-[4px] pl-2 border-transparent hover:border-[#EE4D38]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_91)">
<path d="M24 5.33333H7.99999C6.52724 5.33333 5.33333 6.52724 5.33333 7.99999V24C5.33333 25.4728 6.52724 26.6667 7.99999 26.6667H24C25.4728 26.6667 26.6667 25.4728 26.6667 24V7.99999C26.6667 6.52724 25.4728 5.33333 24 5.33333Z" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 21.3333V21.3467" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 16V16.0133" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6667 10.6667V10.68" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 21.3333V21.3467" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 16V16.0133" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.3333 10.6667V10.68" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 10.6667V10.68" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 21.3333V21.3467" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_91">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<p>Apps</p>
            </li>
          </ul>

          <div className="flex gap-2 items-end flex-1 bottom-0 cursor-pointer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_145)">
<path d="M18.6667 10.6666V7.99998C18.6667 7.29274 18.3857 6.61446 17.8856 6.11436C17.3855 5.61426 16.7072 5.33331 16 5.33331H6.66667C5.95942 5.33331 5.28115 5.61426 4.78105 6.11436C4.28095 6.61446 4 7.29274 4 7.99998V24C4 24.7072 4.28095 25.3855 4.78105 25.8856C5.28115 26.3857 5.95942 26.6666 6.66667 26.6666H16C16.7072 26.6666 17.3855 26.3857 17.8856 25.8856C18.3857 25.3855 18.6667 24.7072 18.6667 24V21.3333" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.33334 16H28M28 16L24 12M28 16L24 20" stroke="#62618F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_145">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
<p>Log out</p>
          </div>
        </div>
        <div className="flex flex-col px-[35px] py-[40px]">
            <h2 className="font-bold text-[35px] text-[#1A194D]">Billing</h2>
            <p className='font-bold mt-8'>Order History</p>
            <p className='mb-8'>Manage billing information and view receips</p>
            <table className="table-auto">
  <thead>
    <tr>
      <th>Date</th>
      <th>Type</th>
      <th>Receipt</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Oct. 21, 2021</td>
      <td>Pro Annual</td>
      <td><button>Download</button></td>
    </tr>
    <tr className='shadow-lg rounded-lg'>
      <td>Aug. 21, 2021</td>
      <td>Pro Portfolio</td>
      <td><button>Download</button></td>
    </tr>
    <tr>
      <td>July. 21, 2021</td>
      <td>Sponsored Post</td>
      <td><button>Download</button></td>
    </tr>
    <tr>
      <td>Jun. 21, 2021</td>
      <td>Sponsored Post</td>
      <td><button>Download</button></td>
    </tr>
  </tbody>
</table>
<Link href="#" className='text-[#EE4D38] underline mb-[100px]'>Load more</Link>
<p className='font-bold'>Payment Method</p>
            <p>Manage billing information and view receips</p>
            <div className="flex gap-[50px] mt-5">
              <span className='border-[1px] rounded-[6px] border-[#CBCBD9] px-[10px] py-[5px] font-bold'>VISA</span>
<p className='font-bold'>Visa ending in 2255</p>
<button className='ml-[300px] border-[1px] rounded-[10px] border-[#CBCBD9] px-[10px] py-[5px]'>Remove</button>
            </div>
        </div>
        <div className="w-[258px] h-[221px] rounded-[16px] bg-[#EE4D38] text-white pl-[25px] flex flex-col justify-center mt-[100px] gap-3">
          <p>Your plan</p>
          <p className='font-bold text-[25px]'>Pro Annual</p>
          <p>Renews on  Nov. 2021</p>
          <button className='bg-transparent border-2 border-white rounded-[8px] p-2 w-[194px]'>Cancel subscription</button>
        </div>
      </div>
    </div>
  );
}
