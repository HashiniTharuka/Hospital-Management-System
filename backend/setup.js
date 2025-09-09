const { execSync } = require('child_process');
const path = require('path');

console.log('Setting up Hospital Management System...\n');

try {
  console.log('Installing backend dependencies...');
  execSync('npm install', { cwd: path.join(__dirname), stdio: 'inherit' });
  
  console.log('\nDependencies installed successfully!');
  console.log('\nTo create an admin user, run: node createAdmin.js');
  console.log('\nTo start the backend server, run: npm start');
  
} catch (error) {
  console.error('Error during setup:', error.message);
  process.exit(1);
}
