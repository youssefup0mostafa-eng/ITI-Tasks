import './Home.module.css'

export default function Home(){

    return (
      <>

        <h1>Youssef Mostafa ELSayednpm </h1>
        <div className='socialContainer' id="social" >

                
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Browse Portfolio</p>
            <ul>
                <li>
                <a
                    href="https://github.com/youssefup0mostafa-eng"
                    target="_blank"
                >
                    <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                    >
                    <use href="/icons.svg#github-icon"></use>
                    </svg>
                    GitHub
                </a>
                </li>
                <li>
                <a
                    href="https://www.linkedin.com/in/youssef-mostafa-413362382/"
                    target="_blank"
                >
                    <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                    >
                    <use href="/icons.svg#linkedin-icon"></use>
                    </svg>
                    Linked-In
                </a>
                </li>
                <li>
                <a
                    href="https://api.whatsapp.com/send/?phone=201003860939&text&type=phone_number&app_absent=0"
                    target="_blank"
                >
                    <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                    >
                    <use href="/icons.svg#whatsapp-icon"></use>
                    </svg>
                    WhatsApp
                </a>
                </li>
                <li>
                <a
                    href="https://youssefup0mostafa-eng.github.io/Portfolio/"
                    target="_blank"
                >
                    <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                    >
                    <use href="/icons.svg#code-icon"></use>
                    </svg>
                    Portfolio
                </a>
                </li>
            </ul>
            </div>
        

      </>
    );
};