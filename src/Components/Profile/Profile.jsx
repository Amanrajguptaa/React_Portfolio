export default function Profile(){
    return(
        <>
        <section class="pb-30 shadow-lg shadow-blue-300/50 ">
        <div class="my-10 px-10 pb-8 flex justify-between items-center" >
                <img class="rounded-full border border-white p-1"src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709235941/media/profile_szwilv.png" alt="profile_photo" />
            <div className="hidden md:block">
                <h1 class="hidden md:block Merienda text-7xl font-bold text-orange-300">AMAN RAJ GUPTA</h1>
                <h3 class="hidden md:block mt-2 text-2xl font-semibold text-lime-100">FRONTEND DEVELOPER |PROGRAMMER | TECHNOLOGY ENTHUSIAST</h3>    
                <p class="hidden md:block mt-1  text-teal-50 text-lg">"Bringing visions to life through the language of code"</p>
                <p class="hidden md:block text-lg font-bold mt-1">I &#x2764;&#xfe0f; to code</p>
            </div>
        </div>
        <div class="block pb-5 mx-5 my-10 md:hidden">
            <h1 class="block text-5xl font-bold text-orange-300 md:hidden">AMAN RAJ GUPTA</h1>
                <h3 class="block mt-2 text-lg font-semibold text-lime-100 md:hidden">FRONTEND DEVELOPER | PROGRAMMER | TECHNOLOGY ENTHUSIAST</h3>    
                <p class="block mt-1 text-sm text-teal-50 md:hidden">"Bringing visions to life through the language of code"</p>
                <p class="block md:hidden text-lg font-bold mt-1">I &#x2764;&#xfe0f; to code</p>
        </div>
        </section>
        </>
    );
}
