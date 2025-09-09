// Simple test script to verify doctors are being fetched correctly
const axios = require('axios');

async function testDoctorsAPI() {
    console.log('Testing Doctors API...\n');

    try {
        // Test 1: Check if backend is running
        console.log('1. Testing backend connection...');
        const response = await axios.get('http://localhost:5000/doctors');
        console.log('✅ Backend is running and responding');
        console.log('📊 Doctors found:', response.data.length);
        
        if (response.data.length > 0) {
            console.log('📋 Doctor list:');
            response.data.forEach((doctor, index) => {
                console.log(`   ${index + 1}. ${doctor.name} - ${doctor.specialization}`);
            });
        } else {
            console.log('⚠️  No doctors found in database');
            console.log('💡 Add some doctors using the admin panel first');
        }

        // Test 2: Try to add a test doctor
        console.log('\n2. Testing doctor creation...');
        const testDoctor = {
            name: 'Dr. Test User',
            specialization: 'General Medicine',
            availability: 'Monday-Friday 9AM-5PM',
            description: 'Test doctor for user appointment testing',
            image: 'https://via.placeholder.com/150'
        };

        const addResponse = await axios.post('http://localhost:5000/doctors/add', testDoctor);
        console.log('✅ Test doctor added successfully:', addResponse.data.name);

        // Test 3: Verify doctor was added
        console.log('\n3. Verifying doctor was added...');
        const updatedResponse = await axios.get('http://localhost:5000/doctors');
        console.log('✅ Total doctors now:', updatedResponse.data.length);

        console.log('\n🎉 Doctors API is working correctly!');
        console.log('\n📝 Next steps:');
        console.log('1. Start the frontend: cd myapp && npm start');
        console.log('2. Go to http://localhost:3000/appointments');
        console.log('3. Check the doctor dropdown - it should now show the doctors');
        console.log('4. If you still don\'t see doctors, check the browser console for errors');

    } catch (error) {
        console.error('❌ Test failed:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response data:', error.response.data);
        } else if (error.code === 'ECONNREFUSED') {
            console.error('❌ Backend server is not running!');
            console.log('💡 Start the backend with: cd Backend && npm start');
        }
    }
}

// Run the test
testDoctorsAPI();
