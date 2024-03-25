import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <>
    <footer id='footercontent'>
    <div className='abolute top-0 left-0 w-full overflow-hidden line  bg-black'>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-20 text-[18px] font-mono'>
        <div className='flex flex-col'>
          <h2 className='text-purple-1100 font-serif uppercase mb-0 text-white'>Career Pulse</h2>
          <p className='text-black-950 font-serif mt-20px text-white'>Empower your hiring process with our comprehensive employment marketplace and application monitoring system. Streamline candidate management, track application progress, and make informed hiring decisions with ease.</p>
        </div>

        <div className='flex flex-col'>
          <ul className='text-white'>
            <li className=' tex-[22px] list-none font-serif  py-2 uppercase'>WEB</li>
            <li className='my-4 list-none font-serif'>Vacancy</li>
            <li className='my-4 list-none font-serif'>Profile</li>
            <li className='my-4 list-none font-serif'></li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <ul className='text-white'>
            <li className=' tex-[22px] list-none font-serif  py-2 uppercase'>Products</li>
            <li className='my-4 list-none font-serif'>Features</li>
            <li className='my-4 list-none font-serif'>About Us</li>
            <li className='my-4 list-none font-serif'></li>
          </ul>
        </div>
        
        <div className='flex flex-col'>
          <ul className='text-white'>
            <li className=' tex-[22px] list-none font-serif  py-2 uppercase'>Contact us</li>
            <li className='my-4 list-none '><a href='/contact'>GDPR</a></li>
            <li className='my-4 list-none font-serif'>Terms and Conditions</li>
            <li className='my-4 list-none font-serif'>Privacy Policy</li>
          </ul>
          <div className="flex space-x-4 social_icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='text-white'>
                        <ion-icon name="logo-facebook" target="_blank" rel="noopener noreferrer" ></ion-icon>
                        </a>
                        <a href="#" className='text-white'>
                        <ion-icon name="logo-twitter" target="_blank" rel="noopener noreferrer"></ion-icon>
                        </a>
                        <a href="#" className='text-white'>
                        <ion-icon name="logo-linkedin" target="_blank" rel="noopener noreferrer"></ion-icon>
                        </a>
                        <a href="#" className='text-white'>
                        <ion-icon name="logo-instagram" target="_blank" rel="noopener noreferrer"></ion-icon>
                        </a>
          </div>
          </div>
        </div>
        <div className="bg-slate-100">
        <h5 className='text-center'>
        &copy; copyright Career Pulse {year}. All rights reserved.
      </h5>
      </div>
        </div>
    </footer>
    </>
  )
}

export default Footer