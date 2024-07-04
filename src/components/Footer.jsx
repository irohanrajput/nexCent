import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const socialMediaLinks = [
    "https://www.instagram.com/",
    "https://www.dribbble.com/",
    "https://www.twitter.com/",
    "https://www.youtube.com/",
  ];

  const Links = {
    Company: [
      { title: "About Us", link: "/about" },
      { title: "Blog", link: "/blog" },
      { title: "Contact Us", link: "/contact" },
      { title: "Pricing", link: "/pricing" },
      { title: "Testimonils", link: "/testimonials" },
    ],
    Support: [
      { title: "Help Center", link: "/help" },
      { title: "Terms of Service", link: "/terms" },
      { title: "Legal", link: "/legal" },
      { title: "Privacy Policy", link: "/privacy" },
      { title: "Status", link: "/status" },
    ],
  };
  const handleEmailNewsletter = () => {
    if (email) {
      alert(`Thank you for subscribing to our newsletter, ${email}`);
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <footer>
      <div
        className="grid-cols-3 grid  p-12 "
        style={{ backgroundColor: "#263238" }}
      >
        <div className="col-span-1 flex flex-col items-center ">
          <div className="flex-col">
            <div className="flex items-center mb-4">
              <img
                src="nexcent.png"
                alt="Nexcent Logo"
                className="m-2 h-8 w-10"
              />
              <h1 className="text-4xl text-white font-bold m-2">Nexcent</h1>
            </div>
            <div className="text-white mx-3">
              <h1 className="my-1">Copyright &copy; 2024 Nexcent ltd.</h1>
              <h1>All rights reserved</h1> <br />
            </div>
          </div>
          <div className="flex my-8">
            {socialMediaLinks.map((link, index) => (
              <span className="m-2">
                <SocialIcon
                  className="hover:scale-110 hover:transition-transform "
                  url={link}
                  bgColor="#364143"
                  fgColor="#ffff"
                />
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-2 grid-cols-3 ml-40 grid p-1 text-white  ">
          <div className="w-full m-1 p-1 font-medium">
            <h1 className="font-bold mb-2 text-2xl">Company</h1>
            <div className="flex flex-col">
              {Links.Company.map((link, index) => {
                return (
                  <a href={link.link} className="my-1 hover:text-blue-500">
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="w-full m-1 p-1 font-medium">
            <h1 className="font-bold mb-2 text-2xl">Support</h1>
            <div className="flex flex-col">
              {Links.Support.map((link, index) => {
                return (
                  <a href={link.link} className="my-1 hover:text-blue-500">
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={() => handleEmailNewsletter()} action="">
            <div className="w-full m-1 p-1 font-medium ">
              <h1 className="font-bold mb-4 text-2xl">Stay Up to date</h1>
              <div
                className="flex items-center rounded-lg "
                style={{ backgroundColor: "#88939E" }}
              >
                <input
                  // style={{ backgroundColor: "#88939E" }}
                  className="text-gray-600 font-serif text-light font-semibold rounded-lg w-full h-11 p-2 "
                  placeholder="your email address"
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-transparent hover:bg-transparent hover:scale-125 hover:transition-transform hover:cursor-pointer hover:border-0" type="submit">
                  <img
                    className="  h-9 "
                    src="send.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
