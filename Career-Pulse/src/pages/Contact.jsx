import {useState} from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if(!formData.name.trim()){
      validationErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    }else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length == 0){
      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  return (
    <>
      <div className="antialiased bg-gradient-to-l from-black to-slate-700">
          <div className="flex w-full min-h-screen justify-center items-center">
            <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6  bg-gradient-to-t from-slate-800 to-gray-700 w-full max-w-4xl p-8 sn:p-12 rounded-xl   shadow-lg text-white overflow-hidden">
              <div className="flex flex-col space-y-8 justify-between">

                <div>
                  <h1 className="font-bold text-4xl tracking-wide">
                    Contact Us
                  </h1>
                  <p className="pt-2 text-white text-sn font-semibold">
                    We are committed to giving you the greatest help and guidance possible during your job hunt. Our support staff is here to assist you with any inquiries you may have about utilizing our platform, assistance with your account, or comments on your overall experience. Our goal is to make the hiring process as simple and easy as possible for you, as we know how difficult it can be to navigate the job market. Please do not hesitate to contact us if you have any questions or issues; we are always happy to assist.
                  </p>
                </div>

                <div className="flex flex-col space-y-6" >
                  <div className="inline-flex space-x-2 items-center text-white">
                    <a href="tel:+94766624778">
                      <ion-icon name="call" className=' text-xl'></ion-icon>
                      <span> 071 158 5890</span>
                    </a>
                  </div>

                  <div className="inline-flex space-x-2 items-center text-white">
                    <a href="mailto:mandeepadesilva4.14@gmail.com">
                      <ion-icon name="mail" className='text-white text-xl'></ion-icon>
                      <span> careerpulse8@gmail.com</span>
                    </a>
                  </div>

                  <div className="inline-flex space-x-2 items-center text-white">
                    <ion-icon name="location" className='text-white text-xl'></ion-icon>
                    <span>No.3 Flower Road Colombo Sri Lanka</span>
                  </div>
                </div>

                <div className="flex space-x-4 text-lg ">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:translate-y-1 text-white">
                    <ion-icon name="logo-facebook" target="_blank" rel="noopener noreferrer"></ion-icon>
                  </a>
                  <a href="#" className="hover:translate-y-1 text-white">
                    <ion-icon name="logo-twitter" target="_blank" rel="noopener noreferrer"></ion-icon>
                  </a>
                  <a href="#" className="hover:translate-y-1 text-white">
                    <ion-icon name="logo-linkedin" target="_blank" rel="noopener noreferrer"></ion-icon>
                  </a>
                  <a href="#" className="hover:translate-y-1 text-white">
                    <ion-icon name="logo-instagram" target="_blank" rel="noopener noreferrer"></ion-icon>
                  </a>
                </div>

              </div>

              <div>
                {/* Form */}
                <div className="relative">
                  <div className="absolute z-0 w-40 h-40 bg-zinc-800 rounded-full -right-28 -top-28 ">
                  </div>
                  <div className="absolute z-1 w-36 h-36 bg-white rounded-full -right-28 -top-28 ">
                  </div>
                </div>

                <div className="relative z-10  bg-black rounded-xl shadow-lg p-8 text-white md:w-80">
                  {submitted ? ( // Display success message if form is submitted successfully
                    <div className="text-white font-semibold text-center text-wrap text-5xl">
                      Thank you for your submission! We  will response to you as soon as possible.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                      <div className='inputbox'>
                        <label htmlFor="name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`ring-1 ring-purple-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600 ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-white text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="text-sn">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className={`ring-1 ring-purple-900 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-white text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="text-sn">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Message"
                          rows={4}
                          className={`ring-1 ring-white w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-red-600 ${errors.message ? 'border-red-500' : ''}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>
                      <button
                        type="submit"
                        className="inline-block self-end bg-black text-white rounded-lg border-white px-6 py-2 uppercase text-sn hover:bg-gray-600 transition:all 0.2s ease-in-out"
                        id="hover"
                      >
                        Submit Message
                      </button>
                    </form>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute z-0 w-40 h-40 bg-stone-700 rounded-full -left-21 -bottom-19 ">
                  </div>
                  <div className="absolute z-1 w-36 h-36 bg-white rounded-full -left-20 -bottom-19 ">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Contact