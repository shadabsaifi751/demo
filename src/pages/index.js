import BusinessInfoSection from "@/components/BusinessInfoSection";
import bell from "@/assets/bell.svg";
import Mail from "@/assets/mail.svg";
import User from "@/assets/user.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="main-head">
            <Link href="/" className="logo">
              Logo
            </Link>

            <div className="group-icons">
              <button>
                <Image src={Mail} alt="" width={30} height={30} />
              </button>
              <button>
                <Image src={bell} alt="" width={30} height={30} />
              </button>
              <button>
                <Image src={User} alt="" width={30} height={30} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <BusinessInfoSection />
      </main>
      <footer>
        <div className="foot-nav">
          <div className="container-fluid">
            <nav className="nav">
              <Link href="#" className="nav-item">
                Home
              </Link>
              <Link href="#" className="nav-item">
                FAQs
              </Link>
              <Link href="#" className="nav-item">
                Contact Us
              </Link>
              <Link href="#" className="nav-item">
                Terms & Conditions
              </Link>
              <Link href="#" className="nav-item">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
        <div className="foot-nav-bottom">
          <div className="container-fluid">
            <div className="foot-title">
              <p className="title">Copyrights 2025. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
