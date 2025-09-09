const DoctorCard = ({ name, specialization, availability, description, image, dateAdded, onEdit, onDelete }) => {
    const defaultImage = 'https://irp-cdn.multiscreensite.com/d8037e1a/dms3rep/multi/Functional+Medicine+Doctor+Chicago.jpeg'; // Default image URL

    // Check if the provided image URL is valid, fallback to default
    const handleImageError = (e) => {
        e.target.src = defaultImage; // Replace with default image if the URL fails to load
    };

    return (
        <div className="doctor-card">
            <div className="doctor-info">
                <h4>{name}</h4>
                <p>
                    <strong>Image:</strong>
                    <img
                        src={image || defaultImage}
                        alt={name}
                        onError={handleImageError} // Add error handling
                        style={{ width: '100px', height: '100px', borderRadius: '8px', marginLeft: '10px' }}
                    />
                </p>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Availability:</strong> {availability}</p>
                <p><strong>Description:</strong> {description}</p>
                <p><strong>Date Added:</strong> {new Date(dateAdded).toLocaleDateString()}</p>
                <div className="doctor-actions">
                    {onEdit && <button onClick={onEdit}>Edit</button>}
                    {onDelete && <button onClick={onDelete}>Delete</button>}
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
