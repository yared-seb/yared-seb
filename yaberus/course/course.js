function toggleSubjects(id) {
  const section = document.getElementById(id);
  const isVisible = section.style.display === "block";
  section.style.display = isVisible ? "none" : "block";
}
