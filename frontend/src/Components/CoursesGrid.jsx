import React from 'react';
import '../styles/coursecard.css'; // Import CSS for CourseCard styling

const CoursesGrid = () => {
    // Example course data
    const courses = [
        {
            id: 1,
            title: 'Voculary Enchancement - elevate vocubulary in 3 weeks',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKh0b8yEYobWCSsLN67uLiSvYmtyQVYC1pA&s',
            price: 29.99,
            isBestSeller: true,
        },
        {
            id: 2,
            title: 'Vedic Mathematics - learn new ways ',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo1tJ1qeRXYO_1KSWG4ez3zMS52RaAYPURP3zUhKfm9RDfNTPnRzH-Xh-mwdz05WH4pw&usqp=CAU',
            price: 39.99,
            isBestSeller: true,
        },
        {
            id: 3,
            title: 'Learn the basics Social Science - develop culture',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GDrQykQpzL9Cz0HK5F6dKaU1iUawalkw9Q&s',
            price: 29.99,
            isBestSeller: false,
        },
        {
            id: 4,
            title: 'Advanced Science - Play with Chemistry and its Bonds',
            image: 'https://img.brainkart.com/article/articleTEVa9s13.png',
            price: 49.99,
            isBestSeller: false,
        },
        {
            id: 5,
            title: 'Discover the variants of Life with Biology',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Zbgs9y3Bg2x5Pwt7aj9qzAKP6RbtB1VuDw&s',
            price: 25.99,
            isBestSeller: false,
        },
    ];

    const bestSellers = courses.filter(course => course.isBestSeller);
    const otherCourses = courses.filter(course => !course.isBestSeller);

    return (
        <div id="courses-grid" className="courses-grid-container">
            <div className="best-sellers">
                {bestSellers.map(course => (
                    <div key={course.id} className="course-card">
                        <div className="image-container">
                            {course.image && <img src={course.image} alt={course.title} />}
                        </div>
                        <div className="course-details">
                            <h3>{course.title}</h3>
                            <p>Price: ${course.price}</p>
                            <div className="actions">
                                <span className="favorite-icon">&#9825;</span>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="other-courses">
                {otherCourses.map(course => (
                    <div key={course.id} className="course-card">
                        <div className="image-container">
                            {course.image && <img src={course.image} alt={course.title} />}
                        </div>
                        <div className="course-details">
                            <h3>{course.title}</h3>
                            <p>Price: ${course.price}</p>
                            <div className="actions">
                                <span className="favorite-icon">&#9825;</span>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesGrid;
