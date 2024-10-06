import "./About.css";
import "../Main/MainContent.css";
export function About() {
  return (
    <main className="about_page">
      <div className="section_heading">
        <img src="/assets/chevron-left.85606530.svg" alt="breadcrums-arrow" />
        <h1 className="section_name about_section_name">Project Overview</h1>
      </div>
      <div className="about_project_text_wrapper">
        <p className="about_project_text">React project </p>
        <p className="about_project_text">
          React project is a web designed with a clean layout structure, dynamic
          routing, and reusable components. It uses React Router v6 for routing
          and demonstrates how to create a layout that contains common elements
          (like a Header and Footer) while dynamically rendering content based
          on the current route.
        </p>
      </div>
      <div className="about_features">
        <h2 className="about_features_heading">Features:</h2>
        <ul className="about_features_ul">
          <li className="features_list_item">React Router Integration</li>
          <li className="features_list_item">Reusable Layout Component</li>
          <li className="features_list_item">Component-Based Architecture</li>
        </ul>
      </div>
    </main>
  );
}
