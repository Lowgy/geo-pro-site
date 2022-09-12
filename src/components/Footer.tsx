import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <nav className="flex py-4 px-6 border-t border-gray-200">
      <Link href="https://ko-fi.com/R6R5EZZXP">
        <a target="_blank" rel="noreferrer">
          <Image
            style={{ border: 0 }}
            height={36}
            width={150}
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </Link>
    </nav>
  );
};

export default Footer;
