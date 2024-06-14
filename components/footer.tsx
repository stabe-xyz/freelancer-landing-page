const Footer = () => {
  return <footer className='p-10 flex justify-center space-x-20'>
    <div>© 2024 {{ name }}</div>
    <div><a className='hover:text-violet-500 transition' href="{{ linkedin_profile_url }}" target="_blank">LinkedIn</a></div>
  </footer>
}

export default Footer;
