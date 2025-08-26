import { mySocials } from "../constants";

function Footer() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
        <div className="flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
            {mySocials.map((social,indx)=>(
                <a 
                    href={social.href} 
                    target='_blank' 
                    key={indx}
                    className="hover:scale-110 transition-transform duration-200"
                >
                    <img 
                        src={social.icon} 
                        alt={social.name}  
                        className="w-5 h-5 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-200"
                    />
                </a>
            ))}
        </div>
        <p>© 2025 Gourav. All rights reserved</p>
    </section>
  )
}

export default Footer;