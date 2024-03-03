export default function Education(){
    return(
        <>
        <section class="pb-30 shadow-lg shadow-blue-300/50 ">
        <div class="my-20 px-10 pb-20">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">EDUCATION</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
        <div class="bg-blue-500 text-white px-6 py-4">
          <h3 class="text-xl font-bold uppercase">high school education</h3>
        </div>
        <div class="px-2 md:px-6 py-4 flex justify-between">
        <div className="flex flex-col justify-center ">
            <p class="text-black text-sm md:text-black md:text-lg font-bold">ICSE BOARD</p>
            <p class="text-black text-xl font-bold">2021</p>
            </div>
            <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709379803/media/ICSE_upscaled-removebg-preview_4_bstvcw.png" alt="" />
        </div>
        </div>

      <div class="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
        <div class="bg-green-500 text-white px-6 py-4">
          <h3 class="text-xl font-bold uppercase">senior secondary education</h3>
        </div>
        <div class="px-2 md:px-6 py-4 flex justify-between">
        <div className="flex flex-col justify-center ">
        <p class="text-black text-sm md:text-black md:text-lg font-bold ">CBSE BOARD</p>
        <p class="text-black text-xl font-bold">2023</p>
        </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709380086/media/CBSE_upscaled-removebg-preview_5_kcbr4f.png" alt="" />
     </div>
      </div>

      <div class="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
        <div class="bg-purple-500 text-white px-6 py-4">
          <h3 class="text-xl font-bold uppercase">undergraduate</h3>
        </div>
        <div class="px-2 md:px-6 py-4 flex justify-between">
        <div className="flex flex-col justify-center ">
        <p class="text-black text-sm md:text-black md:text-lg font-bold ">INDIAN INSTITUTE OF TECHNOLOGY,GUWAHATI</p>
        <p class="text-black text-xl font-bold">PURSUING</p>
        </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709380570/media/IIT_Guwahati_Logo.svg_2_h02yc3.png" alt="" />
     </div>
      </div>

      <div class="bg-white rounded-lg overflow-hidden shadow-md flex flex-col">
        <div class="bg-pink-400 text-white px-6 py-4">
          <h3 class="text-xl font-bold uppercase">Certification programme</h3>
        </div>
        <div class="px-2 md:px-6 py-4 flex justify-between">
        <div className="flex flex-col justify-center ">
        <p class="text-black text-sm md:text-black md:text-lg font-bold ">PHYSICS WALLAH,INSTITUTE OF INNOVATION</p>
        <p class="text-black text-xl font-bold">PURSUING</p>
        </div>
        <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709381057/media/Physics_wallah_logo-removebg-preview_1_f98xfr.png" alt="" />
     </div>
      </div>

    </div>
  </div>
</section>
</>
    );
}