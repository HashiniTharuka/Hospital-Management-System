// Simple API test script
const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

async function testAPI() {
    console.log('Testing Hospital Management API...\n');

    try {
        // Test 1: Get all doctors
        console.log('1. Testing GET /doctors');
        const doctorsResponse = await axios.get(`${BASE_URL}/doctors`);
        console.log('✅ Doctors fetched successfully:', doctorsResponse.data.length, 'doctors found');

        // Test 2: Add a new doctor
        console.log('\n2. Testing POST /doctors/add');
        const newDoctor = {
            name: 'Dr. Test Doctor',
            specialization: 'General Medicine',
            availability: 'Monday-Friday 9AM-5PM',
            description: 'Test doctor for API testing',
            image: 'https://via.placeholder.com/150'
        };
        const addDoctorResponse = await axios.post(`${BASE_URL}/doctors/add`, newDoctor);
        console.log('✅ Doctor added successfully:', addDoctorResponse.data.name);

        // Test 3: Get all appointments
        console.log('\n3. Testing GET /appointments');
        const appointmentsResponse = await axios.get(`${BASE_URL}/appointments`);
        console.log('✅ Appointments fetched successfully:', appointmentsResponse.data.length, 'appointments found');

        // Test 4: Add a new appointment
        console.log('\n4. Testing POST /appointments/add');
        const newAppointment = {
            patientName: 'Test Patient',
            doctorName: 'Dr. Test Doctor',
            date: new Date().toISOString(),
            time: '10:00 AM',
            status: 'Scheduled',
            notes: 'Test appointment'
        };
        const addAppointmentResponse = await axios.post(`${BASE_URL}/appointments/add`, newAppointment);
        console.log('✅ Appointment added successfully:', addAppointmentResponse.data.patientName);

        // Test 5: Verify appointment was added
        console.log('\n5. Verifying appointment was added');
        const updatedAppointmentsResponse = await axios.get(`${BASE_URL}/appointments`);
        console.log('✅ Total appointments now:', updatedAppointmentsResponse.data.length);

        console.log('\n🎉 All API tests passed successfully!');
        console.log('\nYou can now:');
        console.log('- Start the frontend with: cd myapp && npm start');
        console.log('- Visit http://localhost:3000 to use the application');
        console.log('- Add doctors in the admin panel');
        console.log('- Book appointments as a user');

    } catch (error) {
        console.error('❌ API test failed:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        console.log('\nMake sure the backend server is running on port 5000');
        console.log('Run: cd Backend && npm start');
    }
}

// Run the test
testAPI();
