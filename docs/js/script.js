function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "dark"
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme === "light" ? "light" : "")
  localStorage.setItem("theme", newTheme)
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"
  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light")
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar-link")

  window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section[id]")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    links.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active")
      }
    })
  })
})
