export default function Connect(){
    return(
        <>
       <section className=" hidden md:block">
            <div className="my-14 px-10 justify-between">
            <div className="flex justify-center items-center"><h3 className="text-4xl font-bold">CONTACT ME</h3></div>
            
            <div class="min-h-screen flex items-center justify-between ">
            
            <div className="bg-blue-500 p-8 rounded shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
            <form action="#">
                <div class="mb-4">
                    <label for="name" class="block text-white font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" class="border rounded w-full py-2 px-3 text-black  border-black"/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block  text-white font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" class="border rounded w-full py-2 px-3 text-black border-black"/>
                </div>
                <div class="mb-4">
                    <label for="message" class="block  text-white font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="4"class="border rounded w-full py-2 px-3 text-black  border-black"></textarea>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class=" bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                </div>
            </form>
            </div>
        
            <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709312797/media/Messaging_1_1_oq0csy.png" alt="" />
            </div>
            
            </div>
        </section>


    <section className="block md:hidden"> 
            <div className="my-3 px-8 items-center justify-between">
            <div className="flex justify-center items-center"><h3 className="text-2xl font-bold">CONTACT ME</h3></div>
            
            <div class="  items-center  ">
            
            <div className="bg-blue-500 p-8 rounded shadow-md w-full">
            <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
            <form action="#">
                <div class="mb-4">
                    <label for="name" class="block text-white font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" class="border rounded w-full py-2 px-3 text-black  border-black"/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block  text-white font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" class="border rounded w-full py-2 px-3 text-black border-black"/>
                </div>
                <div class="mb-4">
                    <label for="message" class="block  text-white font-bold mb-2">Message</label>
                    <textarea id="message" name="message" rows="4"class="border rounded w-full py-2 px-3 text-black  border-black"></textarea>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class=" bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
                </div>
            </form>
            </div>
            <img src="https://res.cloudinary.com/dkqbawsqm/image/upload/v1709312797/media/Messaging_1_1_oq0csy.png" alt="" className=""/>
            </div>
            </div>
         </section> 
        </>
    );


}