import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="max-w-2xl space-y-6 animate-zoomFade text-center">
            <div className="space-y-2">
              <p className="text-cyan-600 font-medium text-lg">
                Haloo all 😺, it&apos;s me
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                Shabrina Amalia
                <br />
                <span className="gradient-text">Safaana</span>
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-700 font-medium">
                Backend Developer
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
                I&apos;m a second-year{" "}
                <span className="text-cyan-600 font-semibold">
                  Informatics Engineering
                </span>{" "}
                student at Institut Teknologi Sepuluh Nopember (ITS). I have
                enthusiasm in{" "}
                <span className="text-cyan-600 font-semibold">
                  web development
                </span>
                , specializing in{" "}
                <span className="text-cyan-600 font-semibold">
                  Backend Development
                </span>{" "}
                and currently learning Frontend Development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all text-center"
              >
                Get in Touch
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1rpSsVFK1jUOqBxiYqPJ7mjmQTIu6hVOE?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-cyan-500 text-cyan-600 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all text-center"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
