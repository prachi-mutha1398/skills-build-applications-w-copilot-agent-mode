

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
              <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="card text-center">
                <div className="card-body">
                  <h1 className="card-title display-4">Welcome to OctoFit Tracker!</h1>
                  <p className="card-text">Track your fitness activities, join teams, and compete on the leaderboard.</p>
                  <Link className="btn btn-success m-2" to="/activities">View Activities</Link>
                  <Link className="btn btn-info m-2" to="/leaderboard">View Leaderboard</Link>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  import octofitLogo from '../public/octofitapp-small.png';
  );
}

export default App;
