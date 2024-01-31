"use client";

export default function Header() {
  const links = ["About", "Projects", "Contact"];
  return (
    <>
      <nav className="justify-centerpy-2 flex w-full select-none pt-6 font-light md:px-28 md:pb-2">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <h1 className="flex gap-x-8 text-2xl md:text-base">
            Collin Huber
          </h1>
          <div className="nav-links flex gap-x-8 text-xs md:text-base">
            {links.map((link) => (
              <span
                key={link}
                className="cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(link)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}