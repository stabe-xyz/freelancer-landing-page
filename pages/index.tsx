import AppHead from '../components/app-head';
import Container from '../components/container';

export default function Index() {
  return (
    <>
      <AppHead />
      {/* Hero section */}
      <section className='px-10 flex mt-20 mb-32 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0 md:items-center lg:items-center md:p-40 lg:p-40'>
        <div className='flex flex-col'>
          <h1 className='text-4xl text-center md:text-7xl lg:text-7xl md:text-start lg:text-start'>{{ headline }}</h1>
          <h2 className='mt-6 text-xl text-zinc-500 text-center md:text-left lg:text-left'>{{ subheadline }}</h2>
          <div className='self-center md:self-start lg:self-start'>
            <a href="#contact" className="mt-16 inline-flex text-white bg-violet-700 rounded-lg px-5 py-2.5">
              Get in touch now
              <svg className="ml-2 -mr-1 w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>

      </section>

      <hr className='h-0.5' />

      {/* Services section */}
      <section className='px-10 py-5 mb-20 md:mb-0 lg:mb-0 md:px-40 lg:px-40 md:py-32 lg:py-32' >
        <div>
          <h2 className='text-4xl mb-6'>Services</h2>
        </div>
        <div className='mt-10 flex flex-col space-y-6 md:flex-row lg:flex-row md:space-x-2 lg:space-x-2 md:space-y-0 lg:space-y-0'>
          <div className='border rounded p-6 flex flex-col hover:shadow-xl transition-all'>
            <span className='mb-4 text-lg font-bold'>Service 1</span>
            <span className='text-zinc-500 tracking-wide'>Service 1 description</span>
          </div>
          <div className='border rounded p-6 flex flex-col  hover:shadow-xl transition' >
            <span className='mb-4 text-lg font-bold'>Service 2</span>
            <span className='text-zinc-500 tracking-wide'>Service 2 description</span>
          </div>
          <div className='border rounded p-6 flex flex-col  hover:shadow-xl transition' >
            <span className='mb-4 text-lg font-bold'>Service 3</span>
            <span className='text-zinc-500 tracking-wide'>Service 3 description</span>
          </div>
          <div className='border rounded p-6 flex flex-col  hover:shadow-xl transition' >
            <span className='mb-4 text-lg font-bold'>Service 4</span>
            <span className='text-zinc-500 tracking-wide'>Service 4 description</span>
          </div>
        </div>
      </section>

      <hr className='h-0.5' />

      {/* Customers section */}
      <section className='p-10 mb-20 flex items-center md:mb-0 lg:mb-0 md:px-40 lg:px-40 md:py-32 lg:py-32'>
        <div className='flex flex-col md:flex-row lg:flex-row'>
          <div className='md:flex-1 lg:flex-1'>
            <h2 className='text-4xl'>Some companies I have already worked with</h2>
            <div className="mt-10 mb-20 md:mb-0 lg:mb-0">
              <a href="#contact" className='text-xl underline decoration-violet-600 decoration-2 underline-offset-8 cursor-pointer hover:text-violet-600 transition'>Let's get started</a>
            </div>
          </div>
          <div className='flex flex-col md:flex-1 lg:flex-1 space-y-10'>
            <div className='flex justify-around items-center space-x-10'>
              <div className='grayscale'><img alt="idealista logo" src='assets/logo.webp' className='object-scale-down h-24 w-36 rounded-lg' /></div>
              <div className='grayscale'><img alt="idealista logo" src='assets/logo.webp' className='object-scale-down h-24 w-36 rounded-lg' /></div>
              <div className='grayscale'><img alt="idealista logo" src='assets/logo.webp' className='object-scale-down h-24 w-36 rounded-lg' /></div>
            </div>
            <div className='flex justify-around items-center space-x-10'>
            <div className='grayscale'><img alt="idealista logo" src='assets/logo.webp' className='object-scale-down h-24 w-36 rounded-lg' /></div>
            <div className='grayscale'><img alt="idealista logo" src='assets/logo.webp' className='object-scale-down h-24 w-36 rounded-lg' /></div>
            <div className='grayscale'><img alt="idealista logo" src='assets/logo.webp' className='object-scale-down h-24 w-36 rounded-lg' /></div>
            </div>
          </div>
        </div>
      </section>

      <hr className='h-0.5 bg-violet-50' />

      <section className='p-10 mb-20 md:mb-0 lg:mb-0 md:px-40 lg:px-40 md:py-32 lg:py-32'>
        <Container>
          <div className='flex flex-col '>
            <h2 className='text-4xl mb-6'>Who am I</h2>
            <div className='md:flex lg:flex'>
              <div className='p-6 md:w-1/2 lg:w-1/2'>
                <img alt="hector valls avatar" src='assets/avatar.jpeg' className='rounded-full w-96' />
              </div>
              <div className='mt-6 tracking-wide md:mt-0 lg:mt-0 md:p-10 lg:p-10'>
                <p>
                  Write something about you
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <hr className='h-0.5 bg-violet-50' />

      {/* Contact section */}
      <section id="contact" className='p-10 mb-32 md:mb-20 lg:mb-20 md:p-40 lg:p-40'>
        <Container>
          <div className='flex flex-col '>
            <h2 className='text-4xl'>Want to work together?</h2>
            <h3 className='mt-20 underline text-4xl lg:text-8xl'>
              <a href="mailto:{{ email }}">{{ email }}</a>
            </h3>
          </div>
        </Container>
      </section>
    </>
  )
}