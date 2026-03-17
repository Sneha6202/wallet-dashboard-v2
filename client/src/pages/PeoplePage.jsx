import Sidebar from "../components/Sidebar";

function PeoplePage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="workspace centered-page">
        <div className="panel info-page">
          <h2>People</h2>
          <p>
            This page is intentionally added as a secondary routed screen to make the
            assignment architecture more complete.
          </p>
        </div>
      </main>
    </div>
  );
}

export default PeoplePage;