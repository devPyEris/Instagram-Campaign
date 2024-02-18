import "./style.css"

export default function Reviews_Design(){
  return(
    <div className="flex justify-center items-center bg-[#E5E5E5] w-full h-[100vh]">

    <div className="bg-white w-[703px] h-[797px] rounded-[23px] absolute top-[16%] left-[35%]"></div>
    <div className="bg-[#F8F8F8] w-[703px] h-[797px] p-[100px] rounded-[23px] relative shadow-2xl">
      <div className="flex">
      <p className="font-bold text-[35px] text-wrap w-[293px]">What others think about the product</p>
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-xl w-[162px] h-[130px] p-[20px]">
        <div className="flex gap-2 items-center justify-center">
        <svg width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z" fill="#FFD66C" stroke="#EFB153" stroke-width="1.4375"/>
</svg>
<p className="font-bold text-[35px]">4.8</p>
        </div>
        <p className="text-center mt-[5px] font-semibold">Average<br/>customer rating</p>
      </div>
      </div>

      <form action="" className="flex justify-center items-center w-full my-5 rounded-[12px] bg-[#fff] p-[15px] gap-2">
        <label htmlFor="search" className="hidden">Search</label>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_31)">
<path d="M11.6667 19.8333C16.177 19.8333 19.8333 16.177 19.8333 11.6667C19.8333 7.15634 16.177 3.5 11.6667 3.5C7.15634 3.5 3.5 7.15634 3.5 11.6667C3.5 16.177 7.15634 19.8333 11.6667 19.8333Z" stroke="#73749C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 24.5L17.5 17.5" stroke="#73749C" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_31">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>

        <input type="text" id="search" className=" text-[24px] w-full bg-transparent outline-none" placeholder="Search topics and reviews"/>
      </form>
        <p className="font-bold">Reviews</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold text-[20px]">5</p>
          <svg width="33" height="32" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4897 0.813761C11.559 0.614375 11.841 0.614376 11.9103 0.81376L12.2852 0.683455L11.9103 0.813761L14.1695 7.3133C14.3091 7.71485 14.6838 7.98711 15.1089 7.99577L21.9884 8.13596C22.1995 8.14027 22.2866 8.40844 22.1184 8.53597L16.6351 12.6931C16.2964 12.9499 16.1532 13.3905 16.2763 13.7974L18.2689 20.3835C18.33 20.5856 18.1019 20.7513 17.9286 20.6308L12.2805 16.7005C11.9316 16.4577 11.4684 16.4577 11.1195 16.7005L5.47136 20.6308C5.2981 20.7513 5.06997 20.5856 5.1311 20.3835L7.12367 13.7974C7.24677 13.3905 7.10364 12.9499 6.76488 12.6931L1.28159 8.53597C1.11338 8.40844 1.20051 8.14027 1.41156 8.13596L8.29113 7.99577C8.71616 7.98711 9.09089 7.71485 9.23047 7.3133L11.4897 0.813761Z" fill="#FFD66C" stroke="#EFB153" stroke-width="0.79375"/>
</svg>
    <div className="bg-white w-[100%] h-[6px]">
      <div className="bg-[#FFD66C] w-[80%] h-[6px]"></div>
    </div>
    <p className="font-normal text-[20px]">106</p>
        </div>
        {/* star review */}
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold text-[20px]">4</p>
          <svg width="33" height="32" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4897 0.813761C11.559 0.614375 11.841 0.614376 11.9103 0.81376L12.2852 0.683455L11.9103 0.813761L14.1695 7.3133C14.3091 7.71485 14.6838 7.98711 15.1089 7.99577L21.9884 8.13596C22.1995 8.14027 22.2866 8.40844 22.1184 8.53597L16.6351 12.6931C16.2964 12.9499 16.1532 13.3905 16.2763 13.7974L18.2689 20.3835C18.33 20.5856 18.1019 20.7513 17.9286 20.6308L12.2805 16.7005C11.9316 16.4577 11.4684 16.4577 11.1195 16.7005L5.47136 20.6308C5.2981 20.7513 5.06997 20.5856 5.1311 20.3835L7.12367 13.7974C7.24677 13.3905 7.10364 12.9499 6.76488 12.6931L1.28159 8.53597C1.11338 8.40844 1.20051 8.14027 1.41156 8.13596L8.29113 7.99577C8.71616 7.98711 9.09089 7.71485 9.23047 7.3133L11.4897 0.813761Z" fill="#FFD66C" stroke="#EFB153" stroke-width="0.79375"/>
</svg>
    <div className="bg-white w-[100%] h-[6px]">
      <div className="bg-[#FFD66C] w-[40%] h-[6px]"></div>
    </div>
    <p className="font-normal text-[20px]">32</p>
        </div>
        {/* star review */}
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold text-[20px]">3</p>
          <svg width="33" height="32" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4897 0.813761C11.559 0.614375 11.841 0.614376 11.9103 0.81376L12.2852 0.683455L11.9103 0.813761L14.1695 7.3133C14.3091 7.71485 14.6838 7.98711 15.1089 7.99577L21.9884 8.13596C22.1995 8.14027 22.2866 8.40844 22.1184 8.53597L16.6351 12.6931C16.2964 12.9499 16.1532 13.3905 16.2763 13.7974L18.2689 20.3835C18.33 20.5856 18.1019 20.7513 17.9286 20.6308L12.2805 16.7005C11.9316 16.4577 11.4684 16.4577 11.1195 16.7005L5.47136 20.6308C5.2981 20.7513 5.06997 20.5856 5.1311 20.3835L7.12367 13.7974C7.24677 13.3905 7.10364 12.9499 6.76488 12.6931L1.28159 8.53597C1.11338 8.40844 1.20051 8.14027 1.41156 8.13596L8.29113 7.99577C8.71616 7.98711 9.09089 7.71485 9.23047 7.3133L11.4897 0.813761Z" fill="#FFD66C" stroke="#EFB153" stroke-width="0.79375"/>
</svg>
    <div className="bg-white w-[100%] h-[6px]">
      <div className="bg-[#FFD66C] w-[0%] h-[6px]"></div>
    </div>
    <p className="font-normal text-[20px]">0</p>
        </div>
        {/* star review */}
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold text-[20px]">2</p>
          <svg width="33" height="32" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4897 0.813761C11.559 0.614375 11.841 0.614376 11.9103 0.81376L12.2852 0.683455L11.9103 0.813761L14.1695 7.3133C14.3091 7.71485 14.6838 7.98711 15.1089 7.99577L21.9884 8.13596C22.1995 8.14027 22.2866 8.40844 22.1184 8.53597L16.6351 12.6931C16.2964 12.9499 16.1532 13.3905 16.2763 13.7974L18.2689 20.3835C18.33 20.5856 18.1019 20.7513 17.9286 20.6308L12.2805 16.7005C11.9316 16.4577 11.4684 16.4577 11.1195 16.7005L5.47136 20.6308C5.2981 20.7513 5.06997 20.5856 5.1311 20.3835L7.12367 13.7974C7.24677 13.3905 7.10364 12.9499 6.76488 12.6931L1.28159 8.53597C1.11338 8.40844 1.20051 8.14027 1.41156 8.13596L8.29113 7.99577C8.71616 7.98711 9.09089 7.71485 9.23047 7.3133L11.4897 0.813761Z" fill="#FFD66C" stroke="#EFB153" stroke-width="0.79375"/>
</svg>
    <div className="bg-white w-[100%] h-[6px]">
      <div className="bg-[#FFD66C] w-[0%] h-[6px]"></div>
    </div>
    <p className="font-normal text-[20px]">0</p>
        </div>
        {/* star review */}
        <div className="flex items-center justify-center gap-2">
          <p className="font-bold text-[20px]">1</p>
          <svg width="33" height="32" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4897 0.813761C11.559 0.614375 11.841 0.614376 11.9103 0.81376L12.2852 0.683455L11.9103 0.813761L14.1695 7.3133C14.3091 7.71485 14.6838 7.98711 15.1089 7.99577L21.9884 8.13596C22.1995 8.14027 22.2866 8.40844 22.1184 8.53597L16.6351 12.6931C16.2964 12.9499 16.1532 13.3905 16.2763 13.7974L18.2689 20.3835C18.33 20.5856 18.1019 20.7513 17.9286 20.6308L12.2805 16.7005C11.9316 16.4577 11.4684 16.4577 11.1195 16.7005L5.47136 20.6308C5.2981 20.7513 5.06997 20.5856 5.1311 20.3835L7.12367 13.7974C7.24677 13.3905 7.10364 12.9499 6.76488 12.6931L1.28159 8.53597C1.11338 8.40844 1.20051 8.14027 1.41156 8.13596L8.29113 7.99577C8.71616 7.98711 9.09089 7.71485 9.23047 7.3133L11.4897 0.813761Z" fill="#FFD66C" stroke="#EFB153" stroke-width="0.79375"/>
</svg>
    <div className="bg-white w-[100%] h-[6px]">
      <div className="bg-[#FFD66C] w-[0%] h-[6px]"></div>
    </div>
    <p className="font-normal text-[20px]">0</p>
        </div>
        {/* star review */}
      </div>

      <button className="bg-[#191B4A] py-[14px] px-[20px] text-white text-[24px] font-semibold rounded-[25px] mt-[40px]">Write a review</button>
    </div>

    </div>
  );
}