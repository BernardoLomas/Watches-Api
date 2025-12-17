import profile from "../assets/FotoProfi.jpeg";

export default function Footer () {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-profile">
                    <img src={profile} alt="Profile" />
                </div>

                <div className="footer-info">
                    <strong>Bernardo Lomas</strong>
                    <p>Full Stack Developer</p>
                    <p>bernardo.lomasb@gmail.com</p>
                    <p>LinkedIn: BernardoLomas | Github: BernardoLomas</p>
                </div>

                <div className="footer-stack">
                    <strong>Project stack</strong>
                    <p>React - Vite - NodeJs - Prisma - TypeScript - SQLite</p>
                    <p>
                        Online ordering system developed as a technical assessment,
                        focusing on clean architecture, UX and best practices.
                    </p>
                </div>

            </div>
        </footer>
    );
}