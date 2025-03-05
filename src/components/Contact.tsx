import { Clock, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nous rendre visite</h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
          Venez découvrir le véritable goût de l'Italie dans notre restaurant ou commandez en ligne pour une livraison.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-stone-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Adresse</h4>
                  <p className="text-stone-300">2 Rue royal, 59000, Lille</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Numéro de telephone</h4>
                  <p className="text-stone-300">+33 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Heure d'ouverture</h4>
                  <p className="text-stone-300">Lundi - Vendredi: 11H - 20H</p>
                  <p className="text-stone-300">Samedi - Dimanche: 12H - 22H</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Nous suivre</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-stone-700 p-3 rounded-full hover:bg-yellow-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="bg-stone-700 p-3 rounded-full hover:bg-yellow-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="bg-stone-700 p-3 rounded-full hover:bg-yellow-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-stone-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded bg-stone-700 border border-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded bg-stone-700 border border-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Votre email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-stone-700 border border-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-yellow-500 text-stone-900 px-6 py-3 rounded font-medium hover:bg-yellow-400 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-stone-800 p-4 rounded-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.3591052885317!2d3.056258176415408!3d50.639021571628724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d58760cfa9e3%3A0x8751d3289e90ec39!2s2%20Rue%20Royale%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1741162251986!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Adresse de notre restaurant"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;