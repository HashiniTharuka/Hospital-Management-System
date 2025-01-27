import React from 'react';
import './Detail.css'; // Import CSS for detail styling

const SurgeryDetail = () => {
    return (
        <div className="detail-page">
            <div className="detail-content">
                <h2>Surgery Services</h2>
                <div className="image-grid">
                    <img src="https://www.shutterstock.com/shutterstock/videos/1103582813/thumb/1.jpg?ip=x480" alt="Surgery" />
                    {/* Add more images here if needed */}
                </div>
                <p>
                    Our hospital offers comprehensive surgical services tailored to meet the diverse needs of our patients. From routine surgeries to advanced procedures, our expert surgical teams ensure exceptional care and successful outcomes.
                </p>
                <p>
                    We prioritize patient safety and comfort throughout the surgical process, employing the latest technology and techniques. Our dedicated surgical teams collaborate closely to provide personalized treatment plans and ensure each patient receives the highest standard of care.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et sem posuere, non rhoncus odio lacinia. Donec pretium diam ut nisl facilisis, non lobortis arcu hendrerit. Vivamus auctor risus sed erat efficitur, a ultrices velit scelerisque. Sed vitae justo in est ullamcorper aliquet. Proin eget felis eget enim ultricies commodo sit amet sit amet mi. Quisque tristique sapien eget libero congue, nec faucibus felis vehicula.
                </p>
                <p>
                    Fusce fermentum, purus vitae iaculis viverra, felis mi consectetur nisi, at luctus risus est ut justo. Nam eu dapibus purus. Nullam fermentum tellus sit amet lacus vestibulum, eu accumsan velit laoreet. Nulla convallis leo ut tellus aliquet, ac ultrices dui placerat. Cras non orci id orci lacinia finibus non at metus. Nullam fermentum lectus at sapien egestas elementum. Nulla facilisi. Sed id arcu malesuada, egestas dolor vel, iaculis metus. Ut tincidunt nunc vel augue luctus, a sollicitudin risus tempor. Aliquam erat volutpat. Nulla facilisi.
                </p>
                
            </div>
        </div>
    );
}

export default SurgeryDetail;
