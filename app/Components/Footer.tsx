import { Facebook, Instagram, Twitter  } from "lucide-react"

export default function Footer() {
    const footer = [
        {
            id: 1,
            name: "Facebook",
            icon: <Facebook />,
            link: "https://www.facebook.com"
        },
        {
            id: 2,
            name: "Instagram",
            icon: <Instagram />,
            link: "https://www.instagram.com"
        },
        {
            id: 3,
            name: "Twitter",
            icon: <Twitter />,
            link: "https://www.twitter.com"
        },
    ]
  return (
    <footer className="flex items-center justify-center flex-col gap-5 p-5 bg-[#fcc446]">
    <ul className="flex items-center justify-center gap-2 text-[11px]">
        {footer.map((item, id) => (
              <li key={id}><a href={item.link} target="blank">
                {item.icon} 
                <span>{item.name}</span>
                </a></li>
        ))}
    </ul>
    <p className="text-[11px]">&copy; Ativity - Tous droits réservés - 2024</p>
      
    </footer>
  )
}
