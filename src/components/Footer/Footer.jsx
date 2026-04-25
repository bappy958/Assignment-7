import Image from "next/image";
import logo from "@/assets/logo-xl.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full mt-16">
      {/* main section */}
      <div className="bg-[#244D3F] py-8 text-center text-sm text-gray-300 flex flex-col items-center justify-center gap-6 px-4">
        <div className="max-w-150px sm:max-w-180px">
          <Image src={logo} alt="KeenKeeper Logo" priority />
        </div>

        <p className="max-w-280px sm:max-w-md leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex flex-col gap-3">
          <p className="font-semibold text-gray-400 uppercase text-[10px] tracking-widest">
            Social Links
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src={facebook} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src={instagram}
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* divider */}
      <hr className="border-gray-500" />

      {/* copyright and legal section */}
      <div className="bg-[#244D3F] w-full py-6 flex max-sm:flex-col items-center max-sm:justify-between justify-between gap-4 px-4">
        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Keen Keeper. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms-of-service"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
