import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex py-4 px-6 border-b border-gray-200">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/globe">
        <a className="ml-2">Globe</a>
      </Link>
      <Link href="/countries">
        <a className="ml-2">Countries</a>
      </Link>
    </nav>
  );
};

export default NavBar;
