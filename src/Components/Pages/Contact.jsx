import ContactDetails from "../Util/ContactDetails.jsx"
import ContactForm from "../Util/ContactForm.jsx";

import Footer from "../Util/Footer.jsx";

const Contact = () => {
  return (
    <>
        <div className="min-h-screen w-full">

            <div className="min-h-96 py-10 lg:py-32 w-full flex flex-wrap lg:flex-nowrap justify-center gap-4">
                <ContactDetails />
                <div className="w-full sm:w-96 lg:w-[40rem] border-2 border-slate-600 text-slate-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
                    <h1 className="text-4xl leading-10 font-semibold text-slate-100">
                        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
                    </h1>
                    <p className="">
                        Tell us more about yourself and what you&apos;re got in mind.
                    </p>

                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </>
  )
}

export default Contact;