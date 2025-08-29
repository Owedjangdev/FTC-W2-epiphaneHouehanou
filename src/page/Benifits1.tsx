import imgl1 from "../assets/Invoice1.png"
import imgl2 from "../assets/Invoice2.png"
import imgl3 from "../assets/Invoice3.png"
import imgl4 from "../assets/Verif.png"


const Benifits = () => {
  return (
    <div className="bg-white w-full text-gray-800">

    <div className="container mx-auto px-4 py-16">

        <section className="mb-16 flex flex-col  md:flex-row items-center justify-between">
            <div className="flex flex-col">
            <span className=" font-sembiold w-[183px] h-[30px] top-[120px] left-[120px] rotate-0 opacity-100 text-[#7C5CFC]">WHY USE SPEND.IN</span>
            <h1 className="mt-1 text-5xl font-bold leading-tight">Easy, Simple<br/>Affordable</h1>
            </div>
            <p className=" pt-20 text-lg text-gray-600">Our platform helps your business in managing expenses.  These are some <br />  of the reasons why you should <br /> use our platform in managing business finances.</p>
        </section>

        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
  <div className="relative mb-6 h-72 w-full overflow-hidden rounded-lg bg-white">
    {/* Image principale */}
    <img 
      src={imgl1} 
      alt="Automatic Invoice Payment" 
      className="h-full w-full object-contain" 
    />

    {/* Image badge en haut à droite */}
    <img 
      src={imgl4} 
      alt="badge"  
      className="absolute top-0 right-0  -translate-y-5 translate-x-8 rounded-full "
    />
  </div>

  <h3 className="text-xl font-bold">Automatic Invoice Payment</h3>
  <p className="mt-2 text-gray-600">
    No need to pay manually, we provide automatic invoice payment service! 
    Set a payment schedule and you're done, it's that easy!
  </p>
</div>


            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
                <div className="relative mb-6 h-72 w-full overflow-hidden rounded-lg bg-white">
                    <img src={imgl2} alt="Clear payment history" className="h-full w-full object-contain" />
                </div>
                <h3 className="text-xl font-bold">Clear payment history</h3>
                <p className="mt-2 text-gray-600">Struggling with manual expenses? Our platform breaks down every expense you log down to the millisecond!</p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-md">
                <div className="relative mb-6 h-72 w-full overflow-hidden rounded-lg bg-white">
                    <img src={imgl3} alt="Use of multi-card payments" className="h-full w-full object-contain" />
                </div>
                <h3 className="text-xl font-bold">Use of multi-card payments</h3>
                <p className="mt-2 text-gray-600">Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!</p>
            </div>




        </section>

         
    </div>

</div>
  )
}

export default Benifits