const { spawn } = require('child_process');
const http = require('http');

const devProcess = spawn('npm', ['run', 'dev'], {
  cwd: __dirname,
  stdio: 'inherit',
  shell: true
});

// Give the server time to start
setTimeout(() => {
  console.log('Testing if server is running...');

  const req = http.get('http://localhost:3001', (res) => {
    console.log(`Server responded with status: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log('✅ Server is running successfully!');
    } else {
      console.log('⚠️  Server responded with unexpected status');
    }
    process.exit(0);
  });

  req.on('error', (err) => {
    console.log('❌ Server is not responding:', err.message);
    process.exit(1);
  });

  req.setTimeout(5000, () => {
    console.log('❌ Request timeout');
    req.destroy();
    process.exit(1);
  });
}, 5000);

// Handle process termination
process.on('SIGINT', () => {
  console.log('Shutting down...');
  devProcess.kill('SIGINT');
  process.exit(0);
});
