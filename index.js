
export default function Home() {
  return (
    <div style={{ backgroundColor: '#0b0c10', color: '#66fcf1', fontFamily: 'Arial', padding: '2rem' }}>
      <header style={{ backgroundColor: '#1f2833', padding: '1rem', textAlign: 'center' }}>
        <h1>Lineup Logic DFS</h1>
        <img src="/logo.png" alt="Lineup Logic Logo" style={{ maxWidth: '150px', marginTop: '1rem' }} />
      </header>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Your Edge in Daily Fantasy Sports</h2>
        <div style={{ marginTop: '2rem' }}>
          <a href="/optimizer" style={{ padding: '1rem 2rem', backgroundColor: '#45a29e', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
            Launch Optimizer
          </a>
        </div>
      </main>
    </div>
  );
}
