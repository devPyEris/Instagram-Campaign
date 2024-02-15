import "./style.css";

export default function Home_Page_UI(){
  return(
      <div className=" flex items-center justify-center h-[100vh] bg-[#C6CCE0]">
        <div className="w-[990px] h-[244px] rounded-[34px] bg-[#0D2167] absolute top-[50%] left-[20%]"></div>
      <div className="w-[1134px] h-[373px] rounded-[32px] p-[52px] bg-white flex flex-col gap-8 relative">
      <nav>
        <ul className="flex gap-4 ">
          <li className="cursor-pointer border-b-4 font-[500] border-[#0D2167] pb-2 w-[110px]">My parameters</li>
          <li className="cursor-pointer border-b-4 border-white hover:font-[500] hover:border-[#0D2167] pb-2 w-[110px] text-center">Public</li>
          <li className="cursor-pointer border-b-4 border-white hover:font-[500] hover:border-[#0D2167] pb-2 w-[110px]">Configurations</li>
        </ul>
      </nav>
      <div className="flex justify-between">
        <h2 className="font-bold text-[24px]">My Parameters</h2>
        <div className="flex gap-6">
        <button className="flex gap-2 items-center border-[#C6CCE0] border-[2px] rounded-lg p-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_68)">
<path d="M5.33334 26.6667H10.6667L24.6667 12.6667C25.3739 11.9594 25.7712 11.0002 25.7712 10C25.7712 8.9998 25.3739 8.04057 24.6667 7.33333C23.9594 6.62609 23.0002 6.22876 22 6.22876C20.9998 6.22876 20.0406 6.62609 19.3333 7.33333L5.33334 21.3333V26.6667Z" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8.66667L23.3333 14" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_68">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

          <p>Edit</p></button>
        <button className="flex gap-2 items-center border-[#C6CCE0] border-[2px] rounded-lg p-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_78)">
<path d="M5.33331 9.33333H26.6666" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3333 14.6667V22.6667" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 14.6667V22.6667" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66669 9.33333L8.00002 25.3333C8.00002 26.0406 8.28097 26.7188 8.78107 27.2189C9.28117 27.719 9.95944 28 10.6667 28H21.3334C22.0406 28 22.7189 27.719 23.219 27.2189C23.7191 26.7188 24 26.0406 24 25.3333L25.3334 9.33333" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.33333V5.33333C12 4.97971 12.1405 4.64057 12.3905 4.39052C12.6406 4.14048 12.9797 4 13.3333 4H18.6667C19.0203 4 19.3594 4.14048 19.6095 4.39052C19.8595 4.64057 20 4.97971 20 5.33333V9.33333" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_78">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
          <p>Delete</p>
        </button>
        <button className="bg-[#0D2167] text-white rounded-lg p-2">Create parameter</button>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-around">
        <form action="#" className="icon-search w-[844px] h-[64px] border-2 border-[#C6CCE0] p-2 rounded-lg flex focus:border-[#0D2167] items-center gap-2">
          <label htmlFor="search" className="hidden">Search</label>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_19)">
<path d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 28L20 20" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_19">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
        <input 
        type="text" id="search" className="outline-none w-[90%]" placeholder="Search"/>
        </form>
        <div className="flex gap-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<path d="M20 24L12 16L20 8" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p>1</p>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<g clip-path="url(#clip0_1_37)">
<path d="M12 8L20 16L12 24" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_37">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
<g clip-path="url(#clip0_1_40)">
<path d="M29.7667 21.756C30.3347 19.4147 33.6653 19.4147 34.2333 21.756C34.3186 22.1077 34.4856 22.4344 34.7209 22.7093C34.9563 22.9843 35.2532 23.1998 35.5875 23.3383C35.9219 23.4769 36.2842 23.5345 36.645 23.5065C37.0059 23.4785 37.355 23.3657 37.664 23.1773C39.7213 21.924 42.0773 24.2787 40.824 26.3373C40.6359 26.6462 40.5233 26.9951 40.4954 27.3557C40.4674 27.7163 40.525 28.0784 40.6634 28.4125C40.8017 28.7467 41.017 29.0434 41.2916 29.2787C41.5663 29.514 41.8926 29.6812 42.244 29.7667C44.5853 30.3347 44.5853 33.6653 42.244 34.2333C41.8923 34.3186 41.5656 34.4856 41.2907 34.7209C41.0157 34.9563 40.8002 35.2532 40.6617 35.5875C40.5232 35.9219 40.4655 36.2842 40.4935 36.645C40.5215 37.0059 40.6343 37.355 40.8227 37.664C42.076 39.7213 39.7213 42.0773 37.6627 40.824C37.3538 40.6359 37.0049 40.5233 36.6443 40.4954C36.2837 40.4674 35.9216 40.525 35.5875 40.6634C35.2533 40.8017 34.9566 41.017 34.7213 41.2916C34.486 41.5663 34.3188 41.8926 34.2333 42.244C33.6653 44.5853 30.3347 44.5853 29.7667 42.244C29.6814 41.8923 29.5144 41.5656 29.2791 41.2907C29.0437 41.0157 28.7468 40.8002 28.4125 40.6617C28.0781 40.5232 27.7158 40.4655 27.355 40.4935C26.9941 40.5215 26.645 40.6343 26.336 40.8227C24.2787 42.076 21.9227 39.7213 23.176 37.6627C23.3641 37.3538 23.4767 37.0049 23.5046 36.6443C23.5326 36.2837 23.475 35.9216 23.3366 35.5875C23.1983 35.2533 22.983 34.9566 22.7084 34.7213C22.4337 34.486 22.1074 34.3188 21.756 34.2333C19.4147 33.6653 19.4147 30.3347 21.756 29.7667C22.1077 29.6814 22.4344 29.5144 22.7093 29.2791C22.9843 29.0437 23.1998 28.7468 23.3383 28.4125C23.4769 28.0781 23.5345 27.7158 23.5065 27.355C23.4785 26.9941 23.3657 26.645 23.1773 26.336C21.924 24.2787 24.2787 21.9227 26.3373 23.176C27.6707 23.9867 29.3987 23.2693 29.7667 21.756Z" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32 36C34.2091 36 36 34.2091 36 32C36 29.7909 34.2091 28 32 28C29.7909 28 28 29.7909 28 32C28 34.2091 29.7909 36 32 36Z" stroke="#0D2167" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_40">
<rect width="32" height="32" fill="white" transform="translate(16 16)"/>
</clipPath>
</defs>
</svg>

      </div>
      <div className="flex gap-6">
        <button className="flex gap-2 items-center border-[#0D2167] font-[500] border-[2px] rounded-lg p-2">
          <p >Name: contains: auth0</p>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_109)">
<path d="M16.5 5.5L5.5 16.5" stroke="#0D2167" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5 5.5L16.5 16.5" stroke="#0D2167" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_109">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>

          </button>
        <button className="flex gap-2 items-center border-[#C6CCE0] border-[2px] rounded-lg p-2">
          <p>Clear filters</p>
          </button>
      </div>
      </div>
    </div>
  );
}