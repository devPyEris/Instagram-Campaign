import "./style.css"

export default function Progress_Card(){
  return(
    <div className="flex justify-center items-center bg-[#F5F5FD] h-[100vh]">

      <div className="absolute w-[602px] h-[316px] bg-[#D1D0F5] rounded-[30px] top-[30%] left-[34%]"></div>

    <div className="w-[582px] h-[363px] rounded-[30px] p-[100px] flex flex-col gap-7 relative bg-white">
    <p className="font-bold text-[24px]">Your progress</p>
    <div className="flex gap-4 items-center">
    <span className="rounded-[100%] border-[#D5D4F0] border-[6px] flex items-center justify-center text-center w-[90px] h-[90px] font-bold p-[30px] text-[24px]">93%</span>
    <div className="">
      <p className="font-bold text-[18px]">32 of 42 complete</p>
      <p>Finish course to get certificate.</p>
    </div>
    </div>
    </div>
    </div>
  );
}