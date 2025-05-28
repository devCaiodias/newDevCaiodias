/* eslint-disable @next/next/no-html-link-for-pages */
export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Theme Toggle */}

      {/* Background Effects */}

      {/* Navbar */}
      <nav className="bg-transparent p-10 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-lg font-bold">Dev<span className="text-purple-600 text-shadow-custom">CaioDias</span> </a>
          <ul className="flex space-x-7">
            <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white z-10">
        <h1 className="text-6xl md:text-6xl font-semibold tracking-widest">
          Hi, it&apos;s <span className="text-shadow-custom text-shadow-custom">Caio Dias</span>
        </h1>
        <h4 className="text-animation text-white dark:text-white">
          I&apos;m a <span className="relative anima"></span>
        </h4>
        <p className="mt-4 max-w-xl text-sm md:text-base font-mono">
          Olá! Me chamo Caio estudande de Enganheria de software da Fiap, sou desenvolvedor Full stack apaixonado por transformar ideias em interfaces intuitivas, funcionais e bem estruturadas. Trabalho com tecnologias como HTML, CSS, JavaScript, TypeScript, React, Shadcn Ui, Vue.js e Next.js, além de ter experiência com Node.js, Tailwind CSS e ferramentas de design como o Figma.
        </p>
      </div>

      {/* Footer */}
    </div>
  )
}