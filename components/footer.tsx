const Footer = () => {
  return <footer className='p-10 flex justify-center space-x-20'>
    <div>© 2024 {{ stabe.name }}</div>
    <div><a className='hover:text-violet-500 transition' href="{{ stabe.linkedin_profile_url }}" target="_blank">LinkedIn</a></div>
  </footer>
}

export default Footer;
