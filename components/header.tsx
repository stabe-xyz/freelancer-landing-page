import Link from 'next/link';

const Header = () => {

  return (
    <nav className="sticky top-0 bg-white h-24 z-50 p-10 md:px-40 lg:px-40 ">
      <div className="flex items-center justify-between h-full ">
        <div className="text-2xl tracking-wider font-bold" style={{
          fontFamily: "AlfaSlabOne"
        }}>
          <Link href="/">{{ stabe.name }}</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;
