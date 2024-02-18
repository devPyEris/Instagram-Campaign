import Link from 'next/link';
import './style.css'

export default function Analytics_UI_Design(){
  return(
    <div className="bg-[#D2DDF6] flex justify-center items-center h-[100vh]">

      <div className="w-[982px] h-[524px] rounded-[60px] bg-white p-[100px]">
        <p className="text-[46px] font-bold">Traffic source types</p>
        <p className='text-[26px] font-semibold mb-[50px]'>Views · Last 28 days</p>
        <div className="flex gap-16 ">
          <div className="rounded-full border-[#1A52E1] border-[18px] w-[206px] h-[206px] flex justify-center items-center font-bold text-[24px] text-center ">Traffic <br/> sources</div>
          <div className="flex flex-col gap-5 items-start justify-start">
            <div className="flex justify-center items-center ">
            <p className='text-[18px] font-bold w-[150px]'>Channel pages</p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[300px] h-[3px] relative">
              <div className="w-[248px] h-[7px] bg-[#6792FF] absolute right-0 rounded-lg"></div>
            </div>
            <p className='text-[18px] font-bold'>37.5%</p></div>
            </div>
            {/* items % */}
            <div className="flex justify-center items-center ">
            <p className='text-[18px] font-bold w-[150px]'>Direct or unkown</p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[300px] h-[3px] relative">
              <div className="w-[198px] h-[7px] bg-[#4473EA] absolute right-0 rounded-lg"></div>
            </div>
            <p className='text-[18px] font-bold'>33.6%</p></div>
            </div>
            {/* items % */}
            <div className="flex justify-center items-center ">
            <p className='text-[18px] font-bold w-[150px]'>Search</p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[300px] h-[3px] relative">
              <div className="w-[88px] h-[7px] bg-[#1A52E1] absolute right-0 rounded-lg"></div>
            </div>
            <p className='text-[18px] font-bold'>11%</p></div>
            </div>
            {/* items % */}
            <div className="flex justify-center items-center ">
            <p className='text-[18px] font-bold w-[150px]'>External</p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[300px] h-[3px] relative">
              <div className="w-[38px] h-[7px] bg-[#96B3FF] absolute right-0 rounded-lg"></div>
            </div>
            <p className='text-[18px] font-bold'>6%</p></div>
            </div>
            {/* items % */}
            <Link href="#" className='self-end decoration-[#1A52E1] text-[#1A52E1] text-[23px]  underline decoration-solid'>See more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}