import { NavLink } from "react-router-dom";
import { socialLinks } from "./socialLinks";
import { quickLinks } from "./quickLinks";
import { contactInfo } from "./contactInfo";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Company Info */}
          <div
            className="col-span-4"
          >
            <img src="/wv-logo-mark.png" alt="The Web Vibez Logo" className="w-32 mb-4" />
            <p className="text-lg mb-4 max-w-[50vw] lg:max-w-[20vw]">
              One stop solution for your business Website!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <Icon
                  className="text-white cursor-pointer"
                  key={index}
                  onClick={() => window.open(href, "_blank")}
                  size={20} />
              ))}
            </div>

          </div>

          {/* Quick Links */}
          <div
            className="col-span-3"
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, path }, index) => (
                <li key={index}>
                  <NavLink to={path} className=" ">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>



          {/* Contact Info */}
          <div
            className="col-span-3"
          >
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text, href }, index) => (
                <li key={index} className="flex items-center">
                  <Icon size={16} className="mr-2" />
                  {href ? (
                    <a href={href} 
                    className="max-w-64"
                    target="_blank">
                      {text}
                    </a>
                  ) : (
                    <p
                    className="max-w-64"
                    >{text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} The Web Vibez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
