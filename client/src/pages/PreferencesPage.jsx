import Sidebar from "../components/Sidebar";

function PreferencesPage() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="workspace centered-page">
        <div className="panel info-page">
          <h2>Preferences</h2>
          <p>
            This page acts as a routed settings-style screen and keeps the UI
            architecture modular for future extension.
          </p>
        </div>
      </main>
    </div>
  );
}

export default PreferencesPage;