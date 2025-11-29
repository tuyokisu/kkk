export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-neutral-100 text-black">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">CONTACT</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold mb-2">NAME</label>
                        <input type="text" id="name" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold mb-2">EMAIL</label>
                        <input type="email" id="email" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-bold mb-2">SUBJECT</label>
                        <input type="text" id="subject" className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold mb-2">MESSAGE</label>
                        <textarea id="message" rows={6} className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:border-accent"></textarea>
                    </div>
                    <div className="text-center pt-6">
                        <button type="submit" className="bg-black text-white px-12 py-4 text-sm font-bold tracking-widest hover:bg-accent transition-colors">
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
