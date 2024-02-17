import "./style.css"

export default function Product_Review_Modal(){
  return(
    <div className="bg-[#F5F4FF] flex items-center justify-center h-[100vh] w-full">
    
    <div className="bg-[#FDD4D4] rounded-[70px] w-[909px] h-[813px] absolute"></div>

    <div className="w-[658px] h-[991px] rounded-[40px] bg-white relative shadow-lg px-[40px] py-[20px] flex flex-col gap-2">
    {/* write here */}
    <svg width="60" height="60" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-[#F5F4FF] rounded-[100%] p-[10px] self-end cursor-pointer">
<g opacity="0.5" clip-path="url(#clip0_5_77)">
<path d="M27 9L9 27" stroke="#121633" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L27 27" stroke="#121633" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5_77">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg>

    <h2 className="font-bold text-[36px]">Overall rating</h2>
    <div className="flex gap-2">
    <svg width="50" height="50" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-2 border-[#F5F4FF] rounded-md border-[3px]">
<g clip-path="url(#clip0_4_10)">
<path d="M18.5 27.3646L8.98484 32.3673L10.8025 21.7714L3.09413 14.2681L13.7316 12.7265L18.4892 3.08642L23.2468 12.7265L33.8843 14.2681L26.176 21.7714L27.9936 32.3673L18.5 27.3646Z" fill="#FFEC8A" stroke="#FFB444" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_10">
<rect width="37" height="37" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="50" height="50" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-2 border-[#F5F4FF] rounded-md border-[3px]">
<g clip-path="url(#clip0_4_10)">
<path d="M18.5 27.3646L8.98484 32.3673L10.8025 21.7714L3.09413 14.2681L13.7316 12.7265L18.4892 3.08642L23.2468 12.7265L33.8843 14.2681L26.176 21.7714L27.9936 32.3673L18.5 27.3646Z" fill="#FFEC8A" stroke="#FFB444" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_10">
<rect width="37" height="37" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="50" height="50" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-2 border-[#F5F4FF] rounded-md border-[3px]">
<g clip-path="url(#clip0_4_10)">
<path d="M18.5 27.3646L8.98484 32.3673L10.8025 21.7714L3.09413 14.2681L13.7316 12.7265L18.4892 3.08642L23.2468 12.7265L33.8843 14.2681L26.176 21.7714L27.9936 32.3673L18.5 27.3646Z" fill="#FFEC8A" stroke="#FFB444" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_10">
<rect width="37" height="37" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="50" height="50" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-2 border-[#F5F4FF] rounded-md border-[3px]">
<g clip-path="url(#clip0_4_10)">
<path d="M18.5 27.3646L8.98484 32.3673L10.8025 21.7714L3.09413 14.2681L13.7316 12.7265L18.4892 3.08642L23.2468 12.7265L33.8843 14.2681L26.176 21.7714L27.9936 32.3673L18.5 27.3646Z" fill="#FFEC8A" stroke="#FFB444" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_10">
<rect width="37" height="37" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="50" height="50" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-2 border-[#F5F4FF] rounded-md border-[3px]">
<path d="M17.5 26.3646L7.98482 31.3673L9.80245 20.7714L2.09412 13.2681L12.7316 11.7265L17.4892 2.08642L22.2468 11.7265L32.8843 13.2681L25.1759 20.7714L26.9936 31.3673L17.5 26.3646Z" stroke="#AEB3C5" stroke-width="2.3125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
    <p className="font-medium">Click to rate</p>

    <form action="#">
      <div className="flex flex-col gap-1 my-[20px]">
      <label htmlFor="reviewTittle"><strong>Review title</strong></label>
      <input type="text" id="reviewTittle" placeholder="Example: Easy to use" className="p-4 border-[#F5F4FF] rounded-md border-[3px] outline-none" />
      </div>
      {/* form item */}
        <div className="my-[20px]">
        <p><strong>Would you recommend this product to a friend?</strong></p>
      <div className="flex gap-6">
        <div className="flex gap-2">
        <input type="radio" id="yes" name="recommend" />
        <label htmlFor="yes">Yes</label>
        </div>
        <div className="flex gap-2">
        <input type="radio" id="no" name="recommend"/>
        <label htmlFor="no">No</label>
        </div>
      </div>
        </div>
      {/* form item */}
      <div className="flex flex-col gap-1 my-[20px]">
      <label htmlFor="productReview"><strong>Product review</strong></label>
      <textarea id="productReview" placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..." className="p-4 border-[#F5F4FF] rounded-md border-[3px] outline-none" rows={2} />
      </div>
      {/* form item */}
      <div className="flex gap-2">
      <div className="flex flex-col gap-1 my-[20px] flex-1">
      <label htmlFor="nickname"><strong>Nickname</strong></label>
      <input type="text" id="nickname" placeholder="Example: bob27" className="p-4 border-[#F5F4FF] rounded-md border-[3px] outline-none" />
      </div>
      <div className="flex flex-col gap-1 my-[20px] flex-1">
      <label htmlFor="email"><strong>Email address (will not be published)</strong></label>
      <input type="email" id="email" placeholder="Example: your@email.com" className="p-4 border-[#F5F4FF] rounded-md border-[3px] outline-none" />
      </div>
      </div>
      {/* form item */}
    <div className="flex gap-2">
    <input type="radio" name="accept" id="accept" />
    <label htmlFor="accept"><strong>I accept the terms and conditions</strong></label>
    </div>
    <p className="text-wrap font-semibold my-[50px]">
    You will be able to receive emails in connection with this review (eg if others comment on your review). All emails contain the option to unsubscribe. We can use the text and star rating from your review in other marketing.
    </p>
    <input type="submit" value="Submit product review" className="p-3 bg-black rounded-md text-white cursor-pointer" />
    </form>

    </div>

    
    </div>
  )
}