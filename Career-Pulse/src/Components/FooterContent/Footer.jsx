import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <>
    <footer id='footercontent'>
        {/* <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>

        </div> */}
    <div className='abolute top-0 left-0 w-full overflow-hidden line bg-slate-300  rounded-3xl'>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 p-20 text-[18px] font-mono'>
        <div className='flex flex-col'>
          <h2 className='text-purple-950 font-serif uppercase mb-4'>Career Pulse</h2>
          <p className='text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem modi vero. Sed, ipsam quam! Perspiciatis provident, et eius corrupti nostrum totam sunt consequatur fuga enim quis perferendis asperiores praesentium.</p>
        </div>

        <div className='flex flex-col'>
          <ul className='text-black'>
            <li className=' tex-[22px] list-none font-serif text-purple-950 py-2 uppercase'>WEB</li>
            <li className='my-4 list-none '>wee</li>
            <li className='my-4 list-none '>tips and trics</li>
            <li className='my-4 list-none '>Bye</li>
          </ul>
        </div>

        <div className='flex flex-col'>
          <ul className='text-black'>
            <li className=' tex-[22px] list-none font-serif text-purple-950 py-2 uppercase'>About us</li>
            <li className='my-4 list-none '>contact us</li>
            <li className='my-4 list-none '>tips and trics</li>
            <li className='my-4 list-none '>Bye</li>
          </ul>
        </div>
        
        <div className='flex flex-col'>
          <ul className='text-black'>
            <li className=' tex-[22px] list-none font-serif text-purple-950 py-2 uppercase'>Contact us</li>
            <li className='my-4 list-none '><a href='/contact'>Con</a></li>
            <li className='my-4 list-none '>tips and trics</li>
            <li className='my-4 list-none '>Bye</li>
          </ul>
          <div className="flex space-x-4 social_icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-facebook" target="_blank" rel="noopener noreferrer"></ion-icon>
                        </a>
                        <a href="#">
                        <ion-icon name="logo-twitter" target="_blank" rel="noopener noreferrer"></ion-icon>
                        </a>
                        <a href="#">
                        <ion-icon name="logo-linkedin" target="_blank" rel="noopener noreferrer"></ion-icon>
                        </a>
                        <a href="#">
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