<template>
  <div class="header">
    <header class="bg-light">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        id="header-nav"
        role="navigation"
      >
        <div class="container">
          <a class="link-dark navbar-brand site-title mb-0" href="#"
            >Efn Ninja</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-2">
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#portfolio"
                  >Portfolio</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#experience"
                  >Experience</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link smooth-scroll" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <header>
      <div class="cover bg-light">
        <div class="container px-3">
          <div class="row">
            <div class="col-lg-6 p-4 pt-0">
              <img
                class="img-fluid"
                src="../../public/images/hello.svg"
                width="532"
                height="442"
                alt="hello"
              />
            </div>
            <div class="col-lg-6">
              <div class="mt-5">
                <p class="lead text-uppercase mb-1">Hello!</p>
                <h1
                  class="intro-title marker"
                  data-aos="fade-left"
                  data-aos-delay="50"
                >
                  I’m Erfan Sadeghinezhad
                </h1>
                <p
                  class="lead fw-normal mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Full Stack Web Developer
                </p>
                <div class="social-nav" data-aos="fade-up" data-aos-delay="200">
                  <nav role="navigation">
                    <ul class="nav justify-content-left">
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="https://twitter.com/@nezhad.erfan"
                          title="Twitter"
                          ><i class="fab fa-twitter"></i
                          ><span class="menu-title sr-only">Twitter</span></a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="https://github.com/efnninja"
                          title="Github"
                          ><i class="fab fa-github"></i
                          ><span class="menu-title sr-only">Github</span></a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="https://www.instagram.com/erfan99sadeqi"
                          title="Instagram"
                          ><i class="fab fa-instagram"></i
                          ><span class="menu-title sr-only">Instagram</span></a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="https://www.linkedin.com/"
                          title="LinkedIn"
                          ><i class="fab fa-linkedin"></i
                          ><span class="menu-title sr-only">LinkedIn</span></a
                        >
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="mt-3" data-aos="fade-up" data-aos-delay="200">
                  <a
                    class="btn btn-primary shadow-sm mt-1 hover-effect"
                    href="#contact"
                    >Get In Touch <i class="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="wave-bg img-fluid"
        src="../../public/images/wave-bg.svg"
        alt="waves"
      />
    </header>
  </div>
</template>

