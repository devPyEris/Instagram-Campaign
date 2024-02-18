import "./style.css"

export default function Buy_Subcription_Section(){
  return(
    <div className="bg-[#F1F1F6] flex justify-center items-center h-[100vh]">
      <div className="flex flex-col bg-[#F4F5FA] rounded-[26px] w-[1308px] h-[839px] gap-5 py-[60px] items-center shadow-2xl">
      <h2 className="text-center font-bold text-[36px]">Get the most out of your mobile<br/> with the right subscription</h2>
      <p className="text-center font-semibold">All devices come with free delivery or pickup as standard. See information on <br/> available shopping options for your location.</p>
      <div className="flex gap-14">
      <div className="flex flex-col w-[285px] h-[326px] rounded-[14px] p-[30px] bg-white my-[50px]">
      <span className="text-[30px] font-bold">ICE</span>
      <strong>Ice Mobile 10GB</strong>
      <p className="font-semibold">Up to 100Mbit/s</p>
      <p className="text-[28px] my-[20px]"><strong>299,-</strong>/month</p>
      <button className="w-[185px] h-[56px] rounded-[41px] p-[10px] bg-[#F4F5FA] font-semibold shadow-lg shadow-[#F0F0F6] self-center mt-[20px]">Add subscription</button>
      </div>
      {/* items */}
      <div className="flex flex-col w-[285px] h-[326px] rounded-[14px] p-[30px] bg-white my-[50px]">
      <span className="text-[30px] font-bold">Telia</span>
      <strong>Telia Mobil 15GB</strong>
      <p className="font-semibold">Unlimited calls, SMS and MMS</p>
      <p className="text-[28px] my-[20px]"><strong>953,-</strong>/month</p>
      <button className="w-[185px] h-[56px] rounded-[41px] p-[10px] bg-[#F4F5FA] font-semibold shadow-lg shadow-[#F0F0F6] self-center mt-[20px]">Add subscription</button>
      </div>
      {/* items */}
      <div className="flex flex-col w-[285px] h-[326px] rounded-[14px] p-[30px] bg-white my-[50px]">
      <span className="text-[30px] font-bold">telenor</span>
      <strong>Telenor Next Fast</strong>
      <p className="font-semibold">Up to 100Mbit/s</p>
      <p className="text-[28px] my-[20px]"><strong>1028,-</strong>/month</p>
      <button className="w-[185px] h-[56px] rounded-[41px] p-[10px] bg-[#F4F5FA] font-semibold shadow-lg shadow-[#F0F0F6] self-center mt-[20px]">Add subscription</button>
      </div>
      {/* items */}
      
      </div>
      <button className="px-5 py-3 rounded-[14px] bg-[#171435] text-white w-[214px] h-[56px]">See all subscriptions</button>
      </div>

    </div>
  );
}
