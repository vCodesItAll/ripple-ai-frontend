import Link from "next/link";

const Navbar = () => {
  return (
    // need to make mobile friendly
    // when navbar shrinks:
    //  ripple logo needs to shrink slightly and take up top half
    //  links need to shrink more and go under logo with space between links
    // everything needs to center align

    <nav className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-5xl font-bold">
          RiPPLE.<span style={{ color: "orange" }}>ai</span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8">
          <Link href="/stories" className="text-white hover:text-gray-300">
            Stories
          </Link>
          <Link href="/submissions" className="text-white hover:text-gray-300">
            Submissions
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
